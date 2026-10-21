const galleryData = [
  {
    id: 0,
    category: "mountains",
    categoryLabel: "Mountains",
    title: "Alpine Peaks in Morning Fog",
    location: "Dolomites, Italy",
    photographer: "Photo by Luca Bravo",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 1,
    category: "mountains",
    categoryLabel: "Mountains",
    title: "Glacial Valley Basin",
    location: "Banff National Park, Canada",
    photographer: "Photo by James Wheeler",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 2,
    category: "mountains",
    categoryLabel: "Mountains",
    title: "Subalpine Ridge at Dawn",
    location: "Cascade Range, Washington",
    photographer: "Photo by Dave Hoefler",
    thumb: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 3,
    category: "forests",
    categoryLabel: "Forests",
    title: "Coast Redwood Canopy",
    location: "Del Norte Coast, California",
    photographer: "Photo by Rich Martello",
    thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 4,
    category: "forests",
    categoryLabel: "Forests",
    title: "Pine Ridge Morning Mist",
    location: "Black Forest, Germany",
    photographer: "Photo by Kazuend",
    thumb: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 5,
    category: "forests",
    categoryLabel: "Forests",
    title: "Temperate Rainforest Ferns",
    location: "Olympic National Park, Washington",
    photographer: "Photo by Casey Horner",
    thumb: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 6,
    category: "oceans",
    categoryLabel: "Oceans",
    title: "Pacific Coastline and Surf",
    location: "Big Sur, California",
    photographer: "Photo by Jeremy Bishop",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 7,
    category: "oceans",
    categoryLabel: "Oceans",
    title: "Deep Ocean Swell",
    location: "North Shore, Hawaii",
    photographer: "Photo by Silas Baisch",
    thumb: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 8,
    category: "oceans",
    categoryLabel: "Oceans",
    title: "Limestone Cliffs and Ocean",
    location: "Algarve Coast, Portugal",
    photographer: "Photo by Shifaaz Shamoon",
    thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 9,
    category: "wildlife",
    categoryLabel: "Wildlife",
    title: "Red Deer Stag in Forest Clearing",
    location: "Highlands, Scotland",
    photographer: "Photo by Colin Watts",
    thumb: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 10,
    category: "wildlife",
    categoryLabel: "Wildlife",
    title: "Bald Eagle on River Perch",
    location: "Kenai Peninsula, Alaska",
    photographer: "Photo by Frank Cone",
    thumb: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 11,
    category: "wildlife",
    categoryLabel: "Wildlife",
    title: "Arctic Fox in Winter Tundra",
    location: "Hornstrandir, Iceland",
    photographer: "Photo by Jonatan Pie",
    thumb: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 12,
    category: "deserts",
    categoryLabel: "Deserts",
    title: "Linear Sand Dunes at Sunset",
    location: "Sossusvlei, Namibia",
    photographer: "Photo by Jeremy Bishop",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 13,
    category: "deserts",
    categoryLabel: "Deserts",
    title: "Sandstone Plateau at Dusk",
    location: "Moab, Utah",
    photographer: "Photo by Patrick Schneider",
    thumb: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 14,
    category: "deserts",
    categoryLabel: "Deserts",
    title: "Crystalline Salt Flats",
    location: "Death Valley, California",
    photographer: "Photo by Dan Meyers",
    thumb: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80",
    full: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1600&q=85"
  }
];

let activeCategory = "all";
let filteredIndices = galleryData.map((_, i) => i);
let currentPointer = 0;
let previousFocusedElement = null;

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");
const galleryCountElement = document.getElementById("gallery-count");

const lightbox = document.getElementById("lightbox");
const lightboxBackdrop = document.querySelector(".lightbox-backdrop");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxTag = document.getElementById("lightbox-tag");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxLocation = document.getElementById("lightbox-location");
const lightboxPhotographer = document.getElementById("lightbox-photographer");
const lightboxViewOriginal = document.getElementById("lightbox-view-original");
const lightboxCloseBtn = document.getElementById("lightbox-close");
const lightboxPrevBtn = document.getElementById("lightbox-prev");
const lightboxNextBtn = document.getElementById("lightbox-next");
const lightboxBody = document.querySelector(".lightbox-body");

function updateFilter(category) {
  activeCategory = category;

  filterButtons.forEach((btn) => {
    const isSelected = btn.dataset.category === category;
    btn.classList.toggle("active", isSelected);
    btn.setAttribute("aria-selected", isSelected ? "true" : "false");
  });

  filteredIndices = [];

  galleryCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardIndex = parseInt(card.dataset.index, 10);
    const matches = category === "all" || cardCategory === category;

    card.classList.toggle("hidden", !matches);

    if (matches) {
      filteredIndices.push(cardIndex);
    }
  });

  if (galleryCountElement) {
    galleryCountElement.textContent = filteredIndices.length;
  }
}

function openLightbox(galleryIndex) {
  previousFocusedElement = document.activeElement;

  const pointerIndex = filteredIndices.indexOf(galleryIndex);
  currentPointer = pointerIndex >= 0 ? pointerIndex : 0;

  renderActiveImage();

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxCloseBtn.focus();
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (previousFocusedElement && typeof previousFocusedElement.focus === "function") {
    previousFocusedElement.focus();
  }
}

function renderActiveImage() {
  if (filteredIndices.length === 0) return;

  const activeIndex = filteredIndices[currentPointer];
  const item = galleryData[activeIndex];

  lightboxImg.classList.add("loading");
  lightboxImg.src = item.full;
  lightboxImg.alt = item.title;

  lightboxCounter.textContent = (currentPointer + 1) + " / " + filteredIndices.length;
  lightboxTag.textContent = item.categoryLabel;
  lightboxTag.dataset.category = item.category;
  lightboxTitle.textContent = item.title;
  lightboxLocation.textContent = item.location;
  lightboxPhotographer.textContent = item.photographer;
  lightboxViewOriginal.href = item.full;

  lightboxImg.onload = () => {
    lightboxImg.classList.remove("loading");
  };
  lightboxImg.onerror = () => {
    lightboxImg.classList.remove("loading");
  };
}

function showNext() {
  if (filteredIndices.length <= 1) return;
  currentPointer = (currentPointer + 1) % filteredIndices.length;
  renderActiveImage();
}

function showPrev() {
  if (filteredIndices.length <= 1) return;
  currentPointer = (currentPointer - 1 + filteredIndices.length) % filteredIndices.length;
  renderActiveImage();
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateFilter(btn.dataset.category);
  });
});

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const index = parseInt(card.dataset.index, 10);
    openLightbox(index);
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    }
  });
});

lightboxCloseBtn.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxNextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showNext();
});
lightboxPrevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showPrev();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowRight") {
    showNext();
  } else if (e.key === "ArrowLeft") {
    showPrev();
  }
});

let touchStartX = 0;
let touchEndX = 0;

lightboxBody.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightboxBody.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const swipeDelta = touchEndX - touchStartX;
  if (swipeDelta < -40) {
    showNext();
  } else if (swipeDelta > 40) {
    showPrev();
  }
}, { passive: true });
