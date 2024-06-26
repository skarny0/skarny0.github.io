require 'minitest/autorun'
require 'minitest/unit'
require 'minitest/spec'
require 'minitest/hooks/test'
require 'webrick'
require 'fileutils'
require 'zlib'
require 'archive/tar/minitar'
require 'fileutils'
require 'erb'
require 'mini_portile2'
require 'logger'

puts "#{__FILE__}:#{__LINE__}: relevant RbConfig::CONFIG values:"
%w[target_os target_cpu CC CXX].each do |key|
  puts "- #{key}: #{RbConfig::CONFIG[key].inspect}"
end

class TestCase < Minitest::Test
  include Minitest::Hooks

  HTTP_PORT = 23523

  attr_accessor :webrick

  def start_webrick(path)
    @webrick = WEBrick::HTTPServer.new(
      :Port => HTTP_PORT,
      :DocumentRoot => path,
      :Logger => Logger.new(File::NULL),
      :AccessLog => [],
    ).tap do |w|
      Thread.new do
        w.start
      end
      until w.status==:Running
        sleep 0.1
      end
    end
  end

  def stop_webrick
    if w=@webrick
      w.shutdown
      until w.status==:Stop
        sleep 0.1
      end
    end
  end

  def create_tar(tar_path, assets_path, directory)
    FileUtils.mkdir_p(File.dirname(tar_path))
    Zlib::GzipWriter.open(tar_path) do |fdtgz|
      Dir.chdir(assets_path) do
        Archive::Tar::Minitar.pack(directory, fdtgz)
      end
    end
  end

  def work_dir(r=recipe)
    "tmp/#{r.host}/ports/#{r.name}/#{r.version}/#{r.name}-#{r.version}"
  end

  def with_custom_git_dir(dir)
    old = ENV['GIT_DIR']
    ENV['GIT_DIR'] = dir
    yield
  ensure
    ENV['GIT_DIR'] = old
  end

  def with_env(env)
    before = ENV.to_h.dup
    env.each { |k, v| ENV[k] = v }
    yield
  ensure
    ENV.replace(before)
  end

  def without_env(*keys, &blk)
    before = ENV.to_h.dup
    keys.flatten.each { |k| ENV.delete(k) }
    yield
  ensure
    ENV.replace(before)
  end
end
