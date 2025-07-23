document.addEventListener('DOMContentLoaded', function() {
    // Écran de chargement
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Menu mobile
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

mobileMenuOverlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
    
    // Changement de couleur du header au scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Slider hero
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);

   // Animation spécifique pour les mots flottants
gsap.to(".word:nth-child(1)", {
    x: -20,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
gsap.to(".word:nth-child(2)", {
    x: 20,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
});
gsap.to(".word:nth-child(3)", {
    x: -15,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
});
gsap.to(".word:nth-child(4)", {
    x: 15,
    duration: 5.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.5
});

    // Appliquer les animations
    const tl = gsap.timeline();
    tl.fadeIn(".hero-title", {delay: 0.5})
      .fadeIn(".word", {delay: 0.3})
      .fadeIn(".hero-subtitle", {})
      .fadeIn(".hero-buttons", {});

    // Animation des plats flottants
    gsap.to(".dish", {
        y: "+=30",
        rotation: "+=5",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Animation au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    };
        });

    // Onglets du menu
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons et catégories
            tabBtns.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher la catégorie correspondante
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // Modal pour les images
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.btn-view');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const imgSrc = this.closest('.menu-item').querySelector('img').src;
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Fonctionnalité de commande WhatsApp
const orderBtns = document.querySelectorAll('.btn-order');
const notification = document.getElementById('notification');
const notificationMsg = document.getElementById('notification-message');

orderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const itemName = this.getAttribute('data-whatsapp');
        const imageUrl = this.closest('.menu-item').querySelector('.item-image img').src;
        const phoneNumber = '+22961591090'; // Remplacez par le numéro du restaurant
        const message = `Bonjour, je souhaite commander : ${itemName}.\n\nImage du plat: ${imageUrl}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Afficher la notification
        notificationMsg.textContent = `Commande de ${itemName} envoyée au restaurant!`;
        notification.style.display = 'block';
        
        // Rediriger vers WhatsApp après un court délai
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1000);
        
        // Masquer la notification après 3 secondes
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });
});
    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.menu-item, .about-content > div, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les éléments avec des styles pour l'animation
    document.querySelectorAll('.menu-item, .about-content > div, .contact-info, .contact-form').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    
    // Formulaire de contact
    const contactForm = document.getElementById('reservation-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        
        // Pour l'exemple, nous affichons juste une notification
        notificationMsg.textContent = 'Votre message a été envoyé avec succès!';
        notification.style.display = 'block';
        
        // Réinitialiser le formulaire
        this.reset();
        
        // Masquer la notification après 3 secondes
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });
    
    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const btn = form.querySelector('.btn-submit');
        
        // Animation d'envoi
        btn.classList.add('sending');
        btn.disabled = true;
        
        // Simulation d'envoi (remplacez par votre vrai envoi AJAX si nécessaire)
        setTimeout(() => {
            btn.classList.remove('sending');
            btn.classList.add('success');
            
            // Envoi réel du formulaire après l'animation
            setTimeout(() => {
                form.submit();
            }, 1500);
        }, 2000);
    });
    
