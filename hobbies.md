---
layout: default
title: Projects
---

# Hobbies


After finishing my undergrad, I spent eight months backpacking around Nepal (3 mo.) and India (5 mo.). Much of this was time spent walking in the Himalayas and riding trains. At one point I taught Neuroscience to a group of Tibettan Buddhist Nuns. I even took some photos!

Surf trips are a must as well!


## Photo Gallery

<div class="photo-gallery">
  <figure>
    <img src="{{ '/assets/images/20221026_055450.jpg' | relative_url }}" alt="final stretch" onclick="expandImage(this)">
    <figcaption>Final stretch, Annapurna Circuit</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/images/20230205_171909.jpg' | relative_url }}" alt="camel race" onclick="expandImage(this)">
    <figcaption>Winner of the camel race, Desert Festival in Rajasthan.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/images/20221015_090437.jpg' | relative_url }}" alt="lowlands" onclick="expandImage(this)">
    <figcaption>Lowlands, Anapurna Circuit</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/images/20221206_095356.jpg' | relative_url }}" alt="glacier" onclick="expandImage(this)">
    <figcaption>tiny people Big Glacier, Everest Three Passes Trek</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/images/20230120_140842.jpg' | relative_url }}" alt=" train rides" onclick="expandImage(this)">
    <figcaption>Trains!</figcaption>
  </figure>
   <figure>
    <img src="{{ '/assets/images/20230205_165959.jpg' | relative_url }}" alt=" train rides" onclick="expandImage(this)">
    <figcaption>Well dressed camel, Rajasthan</figcaption>
  </figure>
     <figure>
    <img src="{{ '/assets/images/nuns.jpeg' | relative_url }}" alt=" tlwa" onclick="expandImage(this)">
    <figcaption>Neuroscience Workshop, Dharamshala</figcaption>
  </figure>

   <figure>
    <img src="{{ '/assets/images/20240101_143804.jpg' | relative_url }}" alt=" train rides" onclick="expandImage(this)">
    <figcaption>Deep in Baja</figcaption>
  </figure>
</div>

<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="expandedImage">
  <div id="caption"></div>
</div>

<style>
  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .photo-gallery figure {
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .photo-gallery figure:hover {
    transform: scale(1.05);
  }
  
  .photo-gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  
  .photo-gallery figcaption {
    padding: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 0.9rem;
  }

  .expanded-image-container {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    cursor: pointer;
  }

  #expandedImage {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  .modal-content, #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<script>
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("expandedImage");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function expandImage(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.nextElementSibling.innerHTML;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
</script>

