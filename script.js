// Image add and remove functionality
document.getElementById("outfit").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const previewContainer = document.getElementById("image-preview-container");
  const previewImage = document.getElementById("image-preview");
  const removeButton = document.getElementById("remove-image");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewContainer.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    previewContainer.style.display = "none";
  }
});

document.getElementById("remove-image").addEventListener("click", function () {
  const fileInput = document.getElementById("outfit");
  const previewContainer = document.getElementById("image-preview-container");
  const previewImage = document.getElementById("image-preview");

  fileInput.value = "";
  previewImage.src = "";
  previewContainer.style.display = "none";
});

// IF A USER SELECT "FEMALE" AND CHOOSE RING, NECKLESS, PENDANT OR ALL
document.addEventListener("DOMContentLoaded", function () {
  const genderFemale = document.getElementById("gender-female");
  const ringsCheckbox = document.getElementById("jewelry-rings");
  const necklacesCheckbox = document.getElementById("jewelry-necklaces");
  const pendantsCheckbox = document.getElementById("jewelry-pendants");
  const allCheckbox = document.getElementById("jewelry-all");

  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const modalImages = document.getElementById("modal-images");
  const submitButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector(".form-field");

  function openModal(images) {
    modalImages.innerHTML = "";
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      modalImages.appendChild(img);
    });
    modal.style.display = "block";
  }

  function checkConditions(event) {
    event.preventDefault(); // Prevent form from submitting

    if (genderFemale.checked) {
      if (allCheckbox.checked) {
        openModal([
          "./Images/girls/girls-rings-01.jpg",
          "./Images/girls/girls-rings-02.jpg",
          "./Images/girls/girls-rings-03.jpg",
          "./Images/girls/girls-pendant-01.jpg",
          "./Images/girls/girls-pendant-02.jpg",
          "./Images/girls/girls-pendant-03.jpg",
          "./Images/girls/girls-neckless-01.jpg",
          "./Images/girls/girls-neckless-02.jpg",
          "./Images/girls/girls-neckless-03.jpg",
        ]);
      } else if (ringsCheckbox.checked) {
        openModal([
          "./Images/girls/girls-rings-01.jpg",
          "./Images/girls/girls-rings-02.jpg",
          "./Images/girls/girls-rings-03.jpg",
        ]);
      } else if (necklacesCheckbox.checked) {
        openModal([
          "./Images/girls/girls-neckless-01.jpg",
          "./Images/girls/girls-neckless-02.jpg",
          "./Images/girls/girls-neckless-03.jpg",
        ]);
      } else if (pendantsCheckbox.checked) {
        openModal([
          "./Images/girls/girls-pendant-01.jpg",
          "./Images/girls/girls-pendant-02.jpg",
          "./Images/girls/girls-pendant-03.jpg",
        ]);
      }
    }
  }

  form.addEventListener("submit", checkConditions);

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// IF A USER SELECT "MALE" AND CHOOSE RING OR NECKLESS OR PENDANT OR ALL
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-field");
  const modal = document.getElementById("modal");
  const modalImages = document.getElementById("modal-images");
  const closeButton = document.querySelector(".close-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    const jewelryTypes = document.querySelectorAll(
      'input[name="jewelry-type"]:checked'
    );

    if (gender && jewelryTypes.length > 0) {
      let images = [];

      jewelryTypes.forEach((jewelryType) => {
        if (gender.value === "male") {
          if (jewelryType.value === "rings") {
            images = [
              "./Images/boys/boys-ring-01.jpg",
              "./Images/boys/boys-ring-02.jpg",
              "./Images/boys/boys-ring-03.jpg",
            ];
          } else if (jewelryType.value === "necklaces") {
            images = [
              "./Images/boys/boys-chain-01.jpg",
              "./Images/boys/boys-chain-02.jpg",
              "./Images/boys/boys-chain-03.jpg",
            ];
          } else if (jewelryType.value === "pendants") {
            images = [
              "./Images/boys/boys-pendant-01.jpg",
              "./Images/boys/boys-pendant-02.jpg",
              "./Images/boys/boys-pendant-03.jpg",
            ];
          } else if (jewelryType.value === "all") {
            images = [
              "./Images/boys/boys-ring-01.jpg",
              "./Images/boys/boys-ring-02.jpg",
              "./Images/boys/boys-ring-03.jpg",
              "./Images/boys/boys-chain-01.jpg",
              "./Images/boys/boys-chain-02.jpg",
              "./Images/boys/boys-chain-03.jpg",
              "./Images/boys/boys-pendant-01.jpg",
              "./Images/boys/boys-pendant-02.jpg",
              "./Images/boys/boys-pendant-03.jpg",
            ];
          }
        }
      });

      if (images.length > 0) {
        openModal(images);
      }
    }
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    modalImages.innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImages.innerHTML = "";
    }
  });

  function openModal(images) {
    modalImages.innerHTML = "";
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = src.split("/").pop();
      modalImages.appendChild(img);
    });
    modal.style.display = "block";
  }
});

// IF A USER SELECT "OTHER" AND CHOOSE RING OR NECKLESS OR PENDANT OR ALL

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-field");
  const modal = document.getElementById("modal");
  const modalImages = document.getElementById("modal-images");
  const closeButton = document.querySelector(".close-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    const jewelryTypes = document.querySelectorAll(
      'input[name="jewelry-type"]:checked'
    );

    if (gender && jewelryTypes.length > 0) {
      let images = [];

      jewelryTypes.forEach((jewelryType) => {
        if (gender.value === "male") {
          if (jewelryType.value === "rings") {
            images = [
              "./Images/boys/boys-ring-01.jpg",
              "./Images/boys/boys-ring-02.jpg",
              "./Images/boys/boys-ring-03.jpg",
              "./Images/girls/girls-rings-01.jpg",
              "./Images/girls/girls-rings-02.jpg",
              "./Images/girls/girls-rings-03.jpg",
            ];
          }
        } else if (gender.value === "other") {
          if (jewelryType.value === "necklaces") {
            images = [
              "./Images/boys/boys-chain-01.jpg",
              "./Images/boys/boys-chain-02.jpg",
              "./Images/boys/boys-chain-03.jpg",
              "./Images/girls/girls-neckless-01.jpg",
              "./Images/girls/girls-neckless-02.jpg",
              "./Images/girls/girls-neckless-03.jpg",
            ];
          } else if (jewelryType.value === "pendants") {
            images = [
              "./Images/boys/boys-pendant-01.jpg",
              "./Images/boys/boys-pendant-02.jpg",
              "./Images/boys/boys-pendant-03.jpg",
              "./Images/girls/girls-pendant-01.jpg",
              "./Images/girls/girls-pendant-02.jpg",
              "./Images/girls/girls-pendant-03.jpg",
            ];
          } else if (jewelryType.value === "all") {
            images = [
              "./Images/boys/boys-ring-01.jpg",
              "./Images/boys/boys-ring-02.jpg",
              "./Images/boys/boys-ring-03.jpg",
              "./Images/boys/boys-chain-01.jpg",
              "./Images/boys/boys-chain-02.jpg",
              "./Images/boys/boys-chain-03.jpg",
              "./Images/boys/boys-pendant-01.jpg",
              "./Images/boys/boys-pendant-02.jpg",
              "./Images/boys/boys-pendant-03.jpg",
              "./Images/girls/girls-rings-01.jpg",
              "./Images/girls/girls-rings-02.jpg",
              "./Images/girls/girls-rings-03.jpg",
              "./Images/girls/girls-neckless-01.jpg",
              "./Images/girls/girls-neckless-02.jpg",
              "./Images/girls/girls-neckless-03.jpg",
              "./Images/girls/girls-pendant-01.jpg",
              "./Images/girls/girls-pendant-02.jpg",
              "./Images/girls/girls-pendant-03.jpg",
            ];
          }
        }
      });

      if (images.length > 0) {
        openModal(images);
      }
    }
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    modalImages.innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImages.innerHTML = "";
    }
  });

  function openModal(images) {
    modalImages.innerHTML = "";
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = src.split("/").pop();
      modalImages.appendChild(img);
    });
    modal.style.display = "block";
  }
});

// SET THE "REQUIRES" FIELDS
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-field");
  const modal = document.getElementById("modal");
  const modalImages = document.getElementById("modal-images");
  const closeButton = document.querySelector(".close-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const occasion = document.getElementById("occasion").value;
    const budget = document.getElementById("budget").value;
    const purchase = document.querySelector('input[name="purchase"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const jewelryTypes = document.querySelectorAll(
      'input[name="jewelry-type"]:checked'
    );

    if (!occasion) {
      alert("Please select an occasion.");
      return;
    }

    if (!budget) {
      alert("Please select a budget.");
      return;
    }

    if (!purchase) {
      alert("Please select a purchase type.");
      return;
    }

    if (!gender) {
      alert("Please select a gender.");
      return;
    }

    if (jewelryTypes.length === 0) {
      alert("Please select at least one jewelry type.");
      return;
    }

    let images = [];

    jewelryTypes.forEach((jewelryType) => {
      if (gender.value === "other") {
        if (jewelryType.value === "rings") {
          images = [
            "./Images/boys/boys-ring-01.jpg",
            "./Images/boys/boys-ring-02.jpg",
            "./Images/boys/boys-ring-03.jpg",
            "./Images/girls/girls-rings-01.jpg",
            "./Images/girls/girls-rings-02.jpg",
            "./Images/girls/girls-rings-03.jpg",
          ];
        }
      } else if (gender.value === "other") {
        if (jewelryType.value === "necklaces") {
          images = [
            "./Images/boys/boys-chain-01.jpg",
            "./Images/boys/boys-chain-02.jpg",
            "./Images/boys/boys-chain-03.jpg",
            "./Images/girls/girls-neckless-01.jpg",
            "./Images/girls/girls-neckless-02.jpg",
            "./Images/girls/girls-neckless-03.jpg",
          ];
        } else if (jewelryType.value === "pendants") {
          images = [
            "./Images/boys/boys-pendant-01.jpg",
            "./Images/boys/boys-pendant-02.jpg",
            "./Images/boys/boys-pendant-03.jpg",
            "./Images/girls/girls-pendant-01.jpg",
            "./Images/girls/girls-pendant-02.jpg",
            "./Images/girls/girls-pendant-03.jpg",
          ];
        } else if (jewelryType.value === "all") {
          images = [
            "./Images/boys/boys-ring-01.jpg",
            "./Images/boys/boys-ring-02.jpg",
            "./Images/boys/boys-ring-03.jpg",
            "./Images/boys/boys-chain-01.jpg",
            "./Images/boys/boys-chain-02.jpg",
            "./Images/boys/boys-chain-03.jpg",
            "./Images/boys/boys-pendant-01.jpg",
            "./Images/boys/boys-pendant-02.jpg",
            "./Images/boys/boys-pendant-03.jpg",
            "./Images/girls/girls-rings-01.jpg",
            "./Images/girls/girls-rings-02.jpg",
            "./Images/girls/girls-rings-03.jpg",
            "./Images/girls/girls-neckless-01.jpg",
            "./Images/girls/girls-neckless-02.jpg",
            "./Images/girls/girls-neckless-03.jpg",
            "./Images/girls/girls-pendant-01.jpg",
            "./Images/girls/girls-pendant-02.jpg",
            "./Images/girls/girls-pendant-03.jpg",
          ];
        }
      }
    });

    if (images.length > 0) {
      openModal(images);
    }
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    modalImages.innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImages.innerHTML = "";
    }
  });

  function openModal(images) {
    modalImages.innerHTML = "";
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = src.split("/").pop();
      modalImages.appendChild(img);
    });
    modal.style.display = "block";
  }
});

// IF USER UPLOAD AN IMAGE
function getRandomImage(gender, jewelryType) {
  const boysImages = {
    rings: ["boys-ring-01.jpg", "boys-ring-02.jpg", "boys-ring-03.jpg"],
    necklaces: ["boys-chain-01.jpg", "boys-chain-02.jpg", "boys-chain-03.jpg"],
    pendants: [
      "boys-pendant-01.jpg",
      "boys-pendant-02.jpg",
      "boys-pendant-03.jpg",
    ],
  };

  const girlsImages = {
    rings: ["girls-rings-01.jpg", "girls-rings-02.jpg", "girls-rings-03.jpg"],
    necklaces: [
      "girls-neckless-01.jpg",
      "girls-neckless-02.jpg",
      "girls-neckless-03.jpg",
    ],
    pendants: [
      "girls-pendant-01.jpg",
      "girls-pendant-02.jpg",
      "girls-pendant-03.jpg",
    ],
  };

  let images = [];

  if (gender === "male") {
    images = boysImages[jewelryType];
  } else if (gender === "female") {
    images = girlsImages[jewelryType];
  } else if (gender === "other") {
    images = boysImages[jewelryType].concat(girlsImages[jewelryType]);
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  return `./Images/${gender === "male" ? "boys" : "girls"}/${
    images[randomIndex]
  }`;
}
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", function () {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const jewelryTypeCheckbox = document.querySelectorAll(
    'input[name="jewelry-type"]:checked'
  );

  let selectedJewelryTypes = [];
  jewelryTypeCheckbox.forEach((checkbox) => {
    selectedJewelryTypes.push(checkbox.value);
  });

  const images = [];

  selectedJewelryTypes.forEach((jewelryType) => {
    images.push(getRandomImage(gender, jewelryType));
  });

  openModal(images);
});
