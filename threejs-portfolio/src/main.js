import * as THREE from "three";
import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="scene-shell">
    <canvas id="bg-canvas" aria-hidden="true"></canvas>
    <div class="scene-vignette"></div>
  </div>

  <header class="site-header">
    <p class="subject">Eniola Afolayan, PhD</p>
    <nav>
      <ul class="navlinks">
        <li><a href="/about" data-route>About</a></li>
        <li><a href="/research" data-route>Research</a></li>
        <li><a href="/experience" data-route>Experience</a></li>
        <li><a href="/gallery" data-route>Gallery</a></li>
        <li><a href="/contact" data-route>Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div id="route-view"></div>
  </main>

  <footer class="site-footer">
    <p>© Dr. Eniola Afolayan. 2026. All rights reserved.</p>
    <a href="https://www.linkedin.com/in/eniola-a-20500364/" target="_blank" rel="noreferrer noopener">
      <img src="/assets/linkedin.png" alt="LinkedIn" class="linked-logo" />
    </a>
  </footer>
`;

const routeView = document.querySelector("#route-view");
const routeLinks = Array.from(document.querySelectorAll("a[data-route]"));

const routes = {
  "/about": () => `
    <section class="panel hero-panel route-panel">
      <div>
        <p class="eyebrow">Anthropologist and Scholar</p>
        <h1>Anthropologist, Scholar, & Higher Ed. Professional</h1>
        <p class="copy-paragraph lead-paragraph">
          I am a Nigerian-American Anthropologist. I have lived, learned, and worked across
          multiple continents including Africa, North America, and South America. As a scholar
          of Africa and the African Diaspora, my research interests include Aging across the
          African diaspora, Future-Making, Economic Uncertainty, Institutional Culture, Yoruba
          Religions, and Africana Studies.
        </p>
        <p class="copy-paragraph">
          My scholarship is deeply influenced by the love of my family, our cultural heritage,
          and the experiences of Yoruba people across the Black Atlantic with particular focus on
          the African continent.
        </p>
      </div>
      <img src="/assets/Headshot.png" alt="Dr. Afolayan portrait" class="hero-image" />
    </section>
  `,
  "/research": () => `
    <section class="panel route-panel">
      <p class="eyebrow">Research</p>
      <h2>Affecting the Future</h2>
      <p class="copy-paragraph lead-paragraph">
        Against the focus on pastness in discussions of and about heritage sites, I argue, in
        this dissertation project, that such sites ask us to not only consider the past but to
        think about, plan for, and even make the future. To make this point, I consider the case
        of the Osun-Osogbo Sacred Grove, one of only two United Nations Educational, Scientific,
        and Cultural Organization (UNESCO) World Heritage Sites in Nigeria.
      </p>
      <p class="copy-paragraph">
        My work builds on
        preceding literatures about the Grove and takes their arguments, which have mainly
        emphasized the ways in which "...the past and the present are folded together..." in this
        landscape, further: I ask readers to consider not only how the past and present are folded
        together in this landscape but also the future, an assertion made possible through the
        observation of the various people that interact with the site every day. Of these various
        people, I ask readers to encounter the Grove primarily through the experience of the civil
        servant staff members of the National Commission for Museums and Monuments Osogbo, or NCMM
        Osogbo, who themselves are often ignored in narratives about the Grove although they are
        responsible for its maintenance and upkeep.
      </p>
      <p class="copy-paragraph">
        To shift focus away from the pastness this landscape calls to mind and to instead emphasize
        how my interlocutors' experiences are anticipatory of the future, I examine the parallels
        between the tipping practices of the civil servant staff members and the spiritual work
        (known as the Egbe ritual) facilitated by Osun Devotees for particular kinds of visitors.
      </p>
      <p class="copy-paragraph">
        Although different, both practices necessitate social relationships and, especially, money
        for the purposes of guaranteeing oneself a better future. If the spiritual work done at the
        Grove is a way for particular visitors to "manipulate" their destinies, or fates - as I
        demonstrate in later chapters - I want to argue that my civil servant interlocutors also
        "manipulate" their lot in life through the less ritualistic form of tipping as both forms
        of manipulations and relationship management speak to and are meant to help improve one's
        material condition in the future.
      </p>
      <p class="note">Affecting the Future will be available for public access in 2029.</p>
    </section>
  `,
  "/experience": () => `
    <section class="panel route-panel">
      <p class="eyebrow">Experience</p>
      <h2>Academic and Professional Experience</h2>
      <div class="experience-grid">
        <div class="experience-column">
          <article class="exp-accordion-item">
            <button class="exp-accordion-button" aria-expanded="false" aria-controls="panel-education">
              <span>Education</span>
              <span class="exp-icon" aria-hidden="true">
                <span class="exp-icon-horizontal"></span>
                <span class="exp-icon-vertical"></span>
              </span>
            </button>
            <div class="exp-accordion-panel" id="panel-education">
              <ul class="experience-list">
                <li>University of Virginia, PhD in Socio-cultural Anthropology, August 2024</li>
                <li>University of Virginia, MA in Socio-cultural Anthropology, May 2020</li>
                <li>University of Mary Washington, BA in Cultural Anthropology, May 2016</li>
              </ul>
            </div>
          </article>

          <article class="exp-accordion-item">
            <button class="exp-accordion-button" aria-expanded="false" aria-controls="panel-teaching">
              <span>Teaching</span>
              <span class="exp-icon" aria-hidden="true">
                <span class="exp-icon-horizontal"></span>
                <span class="exp-icon-vertical"></span>
              </span>
            </button>
            <div class="exp-accordion-panel" id="panel-teaching">
              <h3 class="experience-subtitle">General Instructor</h3>
              <ul class="experience-list">
                <li>Career Design Bootcamp, PhD Plus</li>
                <li>Foundations Series, PhD Plus</li>
              </ul>

              <h3 class="experience-subtitle">Instructor of Record at UVA</h3>
              <ul class="experience-list">
                <li>Imagining Africa</li>
              </ul>

              <h3 class="experience-subtitle">Teaching Assistantships at UVA</h3>
              <ul class="experience-list">
                <li>Medical Anthropology</li>
                <li>Introduction to Anthropology</li>
                <li>Intro to African American and African Studies I and II</li>
                <li>Anthropology of God</li>
              </ul>

              <h3 class="experience-subtitle">Grading Assistantships at UVA</h3>
              <ul class="experience-list">
                <li>Language and Culture in the Middle East</li>
              </ul>

              <h3 class="experience-subtitle">Guest Lectures</h3>
              <ul class="experience-list">
                <li>Wealth, Poverty, and International Aid, NC State University</li>
                <li>Women and Religion in Africa, UVA</li>
                <li>Yoruba Religions, UVA</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="experience-column">
          <article class="exp-accordion-item">
            <button class="exp-accordion-button" aria-expanded="false" aria-controls="panel-awards">
              <span>Awards, Grants, and Fellowships</span>
              <span class="exp-icon" aria-hidden="true">
                <span class="exp-icon-horizontal"></span>
                <span class="exp-icon-vertical"></span>
              </span>
            </button>
            <div class="exp-accordion-panel" id="panel-awards">
              <ul class="experience-list">
                <li>Finalist, Leading Edge Fellowship Program, American Council of Learned Societies</li>
                <li>Sharon Davie Fellowship, Maxine Platzer Lynn Women's Center, UVA</li>
                <li>Best Dissertation Chapter, Department of Anthropology, UVA</li>
                <li>Nigeria Open Research Finalist, Fulbright US Student Program</li>
                <li>Sigma Xi Grants in Aid of Research</li>
                <li>Lewis and Clark Fund for Exploratory Research, American Philosophical Society</li>
                <li>Global South Lab Fellowship, UVA</li>
                <li>Fellow, Ife Institute of Advanced Studies, Obafemi Awolowo University</li>
                <li>Religion, Race, and Democracy Lab, UVA</li>
                <li>Arts, Humanities, and Social Sciences Summer Research Fellowship, UVA</li>
                <li>Grant for Summer Feasibility Studies for Dissertation Field Research, Anthropology, UVA</li>
                <li>Professional Development Fund, UVA</li>
              </ul>
            </div>
          </article>

          <article class="exp-accordion-item">
            <button class="exp-accordion-button" aria-expanded="false" aria-controls="panel-public">
              <span>Public Facing Work</span>
              <span class="exp-icon" aria-hidden="true">
                <span class="exp-icon-horizontal"></span>
                <span class="exp-icon-vertical"></span>
              </span>
            </button>
            <div class="exp-accordion-panel" id="panel-public">
              <h3 class="experience-subtitle">Scholarly Presentations and Exhibits</h3>
              <ul class="experience-list">
                <li>African, African-American, and Diaspora Studies Interdisciplinary Conference, James Madison University</li>
                <li>Blackness Beyond Protestantism: A Critical Conversation Between Religion and Black Studies Conference, UVA</li>
                <li>Feminine Power: The Divine to the Demonic Exhibit, The British Museum</li>
                <li>Ife Institute of Advanced Studies Bi-Monthly Webinar Series</li>
                <li>Unity in Diversity Documentary Showcase at Violet Cinema</li>
                <li>University of Mary Washington Research and Creativity Day</li>
                <li>Research Experiences for Undergraduate Symposium: Council on Undergraduate Research</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  "/gallery": () => `
    <section class="panel route-panel">
      <p class="eyebrow">Gallery</p>
      <h2>Osun, Oshogbo, Nigeria, W. Africa 2021-2022</h2>
      <p class="note">Use the buttons, arrow keys, or click any image to view it full size.</p>
      <div class="carousel-frame">
        <canvas id="gallery-canvas" aria-label="Three-dimensional gallery carousel"></canvas>
      </div>
      <div class="carousel-controls">
        <button type="button" id="carousel-prev" aria-label="Previous image">Previous</button>
        <button type="button" id="carousel-next" aria-label="Next image">Next</button>
      </div>

      <div class="gallery-lightbox" id="gallery-lightbox" hidden>
        <div class="gallery-lightbox-inner">
          <button type="button" class="gallery-lightbox-close" id="gallery-lightbox-close" aria-label="Close full image">
            Close
          </button>
          <img src="" alt="Selected gallery image" id="gallery-lightbox-image" />
        </div>
      </div>
    </section>
  `,
  "/contact": () => `
    <section class="panel contact-panel route-panel">
      <div class="contact-image-wrap">
        <img src="/assets/contact-background2.png" alt="Contact visual" class="contact-image" />
      </div>
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Let's Work Together</h2>
        <p class="contact-copy">Fill out the form and I will be in touch shortly.</p>
        <form action="https://formspree.io/f/mvzlrane" method="POST" class="contact-form">
          <label>First Name (required)
            <input type="text" name="first-name" autocomplete="given-name" required />
          </label>
          <label>Last Name (required)
            <input type="text" name="last-name" autocomplete="family-name" required />
          </label>
          <label>Email (required)
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label class="checkbox-row">
            <input type="hidden" name="newsletter" value="no" />
            <input type="checkbox" name="newsletter" value="yes" />
            Sign up for news and updates
          </label>
          <label>Message (required)
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  `,
};

const cameraTargets = {
  "/about": {
    position: new THREE.Vector3(0, 0.75, 5.5),
    look: new THREE.Vector3(0, 0, 0),
  },
  "/research": {
    position: new THREE.Vector3(-0.8, 1.25, 4.6),
    look: new THREE.Vector3(0, 0.2, 0),
  },
  "/experience": {
    position: new THREE.Vector3(0.95, 0.35, 4.4),
    look: new THREE.Vector3(0, -0.1, 0),
  },
  "/gallery": {
    position: new THREE.Vector3(0, 1.05, 3.6),
    look: new THREE.Vector3(0, 0.4, 0),
  },
  "/contact": {
    position: new THREE.Vector3(0, 0.1, 5.3),
    look: new THREE.Vector3(0, -0.2, 0),
  },
};

const cameraTargetPosition = cameraTargets["/about"].position.clone();
const cameraTargetLook = cameraTargets["/about"].look.clone();
const cameraCurrentLook = cameraTargets["/about"].look.clone();

const canvas = document.querySelector("#bg-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(0, 0.8, 5.5);

const ambientLight = new THREE.AmbientLight(0xdde6ff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffd084, 1.15, 20);
pointLight.position.set(1.8, 2.5, 2.8);
scene.add(pointLight);

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.3, 180, 32),
  new THREE.MeshStandardMaterial({
    color: 0x5c3f91,
    metalness: 0.45,
    roughness: 0.2,
  }),
);
scene.add(knot);

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(1.95, 0.05, 16, 120),
  new THREE.MeshBasicMaterial({ color: 0xf6cb5a }),
);
ring.rotation.x = Math.PI / 2.8;
scene.add(ring);

const halo = new THREE.Mesh(
  new THREE.TorusGeometry(2.4, 0.08, 18, 120),
  new THREE.MeshBasicMaterial({
    color: 0xffd083,
    transparent: true,
    opacity: 0.35,
  }),
);
halo.rotation.x = Math.PI / 2.5;
scene.add(halo);

const stars = new THREE.Group();
const starGeometry = new THREE.SphereGeometry(0.02, 6, 6);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xf6ecd4 });
for (let i = 0; i < 140; i += 1) {
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.position.set(
    (Math.random() - 0.5) * 14,
    (Math.random() - 0.5) * 8,
    -Math.random() * 8,
  );
  stars.add(star);
}
scene.add(stars);

const galleryImagePaths = Array.from(
  { length: 30 },
  (_, index) => `/assets/Gallery-${index + 1}.webp`,
);

const galleryState = {
  renderer: null,
  scene: null,
  camera: null,
  group: null,
  meshes: [],
  targetIndex: 0,
  currentIndexFloat: 0,
  raycaster: null,
  pointer: null,
  handleCanvasClick: null,
  handleLightboxClose: null,
  handleLightboxBackdrop: null,
  handleResize: null,
};

const wrapIndex = (index, count) => ((index % count) + count) % count;

const disposeGalleryCarousel = () => {
  if (!galleryState.renderer) {
    return;
  }

  const galleryCanvas = document.querySelector("#gallery-canvas");
  const lightboxClose = document.querySelector("#gallery-lightbox-close");
  const lightbox = document.querySelector("#gallery-lightbox");

  window.removeEventListener("resize", galleryState.handleResize);
  if (galleryCanvas && galleryState.handleCanvasClick) {
    galleryCanvas.removeEventListener("click", galleryState.handleCanvasClick);
  }
  if (lightboxClose && galleryState.handleLightboxClose) {
    lightboxClose.removeEventListener(
      "click",
      galleryState.handleLightboxClose,
    );
  }
  if (lightbox && galleryState.handleLightboxBackdrop) {
    lightbox.removeEventListener("click", galleryState.handleLightboxBackdrop);
  }

  galleryState.meshes.forEach((mesh) => {
    mesh.geometry.dispose();
    mesh.material.map?.dispose();
    mesh.material.dispose();
    galleryState.group.remove(mesh);
  });

  galleryState.renderer.dispose();
  galleryState.renderer = null;
  galleryState.scene = null;
  galleryState.camera = null;
  galleryState.group = null;
  galleryState.meshes = [];
  galleryState.targetIndex = 0;
  galleryState.currentIndexFloat = 0;
  galleryState.raycaster = null;
  galleryState.pointer = null;
  galleryState.handleCanvasClick = null;
  galleryState.handleLightboxClose = null;
  galleryState.handleLightboxBackdrop = null;
  galleryState.handleResize = null;
};

const rotateCarousel = (step) => {
  const itemCount = galleryImagePaths.length;
  galleryState.targetIndex = wrapIndex(
    galleryState.targetIndex + step,
    itemCount,
  );
};

const openGalleryLightbox = (imagePath) => {
  const lightbox = document.querySelector("#gallery-lightbox");
  const lightboxImage = document.querySelector("#gallery-lightbox-image");
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = imagePath;
  lightbox.hidden = false;
};

const closeGalleryLightbox = () => {
  const lightbox = document.querySelector("#gallery-lightbox");
  if (!lightbox) {
    return;
  }
  lightbox.hidden = true;
};

const initGalleryCarousel = () => {
  const galleryCanvas = document.querySelector("#gallery-canvas");
  if (!galleryCanvas) {
    return;
  }

  disposeGalleryCarousel();

  const localRenderer = new THREE.WebGLRenderer({
    canvas: galleryCanvas,
    antialias: true,
    alpha: true,
  });
  localRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));

  const localScene = new THREE.Scene();
  const localCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  localCamera.position.set(0, 0.1, 6.2);

  localScene.add(new THREE.AmbientLight(0xffffff, 0.8));

  const rimLight = new THREE.PointLight(0xffcf6f, 1.2, 30);
  rimLight.position.set(2, 3, 4);
  localScene.add(rimLight);

  const group = new THREE.Group();
  localScene.add(group);

  const textureLoader = new THREE.TextureLoader();
  const itemCount = galleryImagePaths.length;
  const maxAnisotropy = localRenderer.capabilities.getMaxAnisotropy();

  galleryImagePaths.forEach((path, index) => {
    const texture = textureLoader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = Math.min(16, maxAnisotropy);
    texture.needsUpdate = true;
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.02,
      transparent: true,
      opacity: 0.9,
      emissive: 0x2a2a2a,
      emissiveIntensity: 0.18,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.95, 2.05), material);

    mesh.userData.index = index;
    mesh.userData.imagePath = path;

    group.add(mesh);
    galleryState.meshes.push(mesh);
  });

  const resizeGallery = () => {
    const width = galleryCanvas.clientWidth;
    const height = galleryCanvas.clientHeight;
    localRenderer.setSize(width, height, false);
    localCamera.aspect = width / height;
    localCamera.updateProjectionMatrix();
  };

  resizeGallery();
  window.addEventListener("resize", resizeGallery);

  galleryState.renderer = localRenderer;
  galleryState.scene = localScene;
  galleryState.camera = localCamera;
  galleryState.group = group;
  galleryState.currentIndexFloat = 0;
  galleryState.targetIndex = 0;
  galleryState.raycaster = new THREE.Raycaster();
  galleryState.pointer = new THREE.Vector2();
  galleryState.handleResize = resizeGallery;

  galleryState.handleCanvasClick = (event) => {
    const rect = galleryCanvas.getBoundingClientRect();
    galleryState.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    galleryState.pointer.y =
      -((event.clientY - rect.top) / rect.height) * 2 + 1;
    galleryState.raycaster.setFromCamera(galleryState.pointer, localCamera);

    const intersections = galleryState.raycaster.intersectObjects(
      galleryState.meshes,
    );
    if (!intersections.length) {
      return;
    }

    const selectedMesh = intersections[0].object;
    const selectedIndex = selectedMesh.userData.index;
    galleryState.targetIndex = selectedIndex;
    openGalleryLightbox(selectedMesh.userData.imagePath);
  };

  galleryState.handleLightboxClose = () => closeGalleryLightbox();
  galleryState.handleLightboxBackdrop = (event) => {
    if (event.target.id === "gallery-lightbox") {
      closeGalleryLightbox();
    }
  };

  galleryCanvas.addEventListener("click", galleryState.handleCanvasClick);
  document
    .querySelector("#gallery-lightbox-close")
    ?.addEventListener("click", galleryState.handleLightboxClose);
  document
    .querySelector("#gallery-lightbox")
    ?.addEventListener("click", galleryState.handleLightboxBackdrop);

  document
    .querySelector("#carousel-prev")
    ?.addEventListener("click", () => rotateCarousel(-1));
  document
    .querySelector("#carousel-next")
    ?.addEventListener("click", () => rotateCarousel(1));
};

const renderGalleryCarousel = (elapsed) => {
  if (!galleryState.renderer || !galleryState.group) {
    return;
  }

  const itemCount = galleryState.meshes.length;
  let delta = galleryState.targetIndex - galleryState.currentIndexFloat;
  if (delta > itemCount / 2) {
    delta -= itemCount;
  } else if (delta < -itemCount / 2) {
    delta += itemCount;
  }
  galleryState.currentIndexFloat += delta * 0.12;

  galleryState.meshes.forEach((mesh) => {
    const index = mesh.userData.index;
    let relative = index - galleryState.currentIndexFloat;
    if (relative > itemCount / 2) {
      relative -= itemCount;
    } else if (relative < -itemCount / 2) {
      relative += itemCount;
    }

    const distance = Math.abs(relative);
    mesh.position.x = relative * 1.78;
    mesh.position.z = -0.6 - Math.min(distance * 1.1, 8);
    mesh.position.y = 0;
    mesh.rotation.y = -relative * 0.13;

    const scale = Math.max(0.64, 1.5 - distance * 0.16);
    mesh.scale.setScalar(scale);
    mesh.material.opacity = Math.max(0.58, 1 - distance * 0.1);
    mesh.material.emissiveIntensity = Math.max(0.14, 0.32 - distance * 0.03);
    mesh.visible = distance < 8;
  });

  galleryState.group.position.y = Math.sin(elapsed * 0.6) * 0.04;
  galleryState.group.rotation.x = Math.sin(elapsed * 0.28) * 0.015;

  galleryState.renderer.render(galleryState.scene, galleryState.camera);
};

const setActiveRoute = (path) => {
  routeLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === path;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const getValidRoute = (pathName) => {
  if (pathName === "/") {
    return "/about";
  }
  if (routes[pathName]) {
    return pathName;
  }
  return "/about";
};

const updateCameraTarget = (path) => {
  const target = cameraTargets[path] || cameraTargets["/about"];
  cameraTargetPosition.copy(target.position);
  cameraTargetLook.copy(target.look);
  ring.material.color.set(path === "/gallery" ? 0xffdb8c : 0xf6cb5a);
  halo.material.opacity = path === "/contact" ? 0.45 : 0.35;
};

const initExperienceAccordions = () => {
  const buttons = routeView.querySelectorAll(".exp-accordion-button");
  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? routeView.querySelector(`#${panelId}`) : null;
    if (!panel) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      button.classList.toggle("is-active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
};

const renderRoute = (path) => {
  const finalPath = getValidRoute(path);
  const routeRenderer = routes[finalPath];
  routeView.innerHTML = routeRenderer();
  setActiveRoute(finalPath);
  updateCameraTarget(finalPath);

  if (finalPath === "/gallery") {
    initGalleryCarousel();
  } else {
    disposeGalleryCarousel();
  }

  if (finalPath === "/experience") {
    initExperienceAccordions();
  }
};

const navigate = (targetPath, pushState = true) => {
  const finalPath = getValidRoute(targetPath);
  if (pushState && window.location.pathname !== finalPath) {
    window.history.pushState({}, "", finalPath);
  }
  renderRoute(finalPath);
};

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("a[data-route]");
  if (!routeLink) {
    return;
  }

  event.preventDefault();
  navigate(routeLink.getAttribute("href"));
});

window.addEventListener("popstate", () => {
  navigate(window.location.pathname, false);
});

window.addEventListener("keydown", (event) => {
  if (window.location.pathname !== "/gallery") {
    return;
  }

  if (event.key === "ArrowLeft") {
    rotateCarousel(-1);
  }
  if (event.key === "ArrowRight") {
    rotateCarousel(1);
  }
  if (event.key === "Escape") {
    closeGalleryLightbox();
  }
});

navigate(window.location.pathname, false);

const pointer = { x: 0, y: 0 };
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

const onResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
};
onResize();
window.addEventListener("resize", onResize);

const clock = new THREE.Clock();
const animate = () => {
  const elapsed = clock.getElapsedTime();
  knot.rotation.x = elapsed * 0.25 + pointer.y * 0.2;
  knot.rotation.y = elapsed * 0.35 + pointer.x * 0.25;
  ring.rotation.z = elapsed * 0.14;
  stars.rotation.y = elapsed * 0.02;
  stars.rotation.x = Math.sin(elapsed * 0.1) * 0.05;

  camera.position.x +=
    (cameraTargetPosition.x + pointer.x * 0.26 - camera.position.x) * 0.045;
  camera.position.y +=
    (cameraTargetPosition.y + pointer.y * 0.18 - camera.position.y) * 0.045;
  camera.position.z += (cameraTargetPosition.z - camera.position.z) * 0.045;
  cameraCurrentLook.lerp(cameraTargetLook, 0.06);
  camera.lookAt(cameraCurrentLook);

  halo.rotation.z = elapsed * 0.1;

  renderer.render(scene, camera);
  renderGalleryCarousel(elapsed);
  requestAnimationFrame(animate);
};

animate();
