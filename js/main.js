// Video gallery functionality
const videoGalleryItems = document.querySelectorAll('.gallery-item');
let currentVideoItem = 0;

// Only run video gallery code if elements exist
if (videoGalleryItems.length > 0) {
    function rotateVideoGallery() {
        // Remove prev class from all items
        videoGalleryItems.forEach(item => item.classList.remove('prev'));

        // Add prev class to current active item
        videoGalleryItems[currentVideoItem].classList.add('prev');
        videoGalleryItems[currentVideoItem].classList.remove('active');

        // Calculate next item
        currentVideoItem = (currentVideoItem + 1) % videoGalleryItems.length;

        // Add active class to next item
        videoGalleryItems[currentVideoItem].classList.add('active');
    }

    // Initialize first item
    document.addEventListener('DOMContentLoaded', function() {
        videoGalleryItems[0].classList.add('active');

        // Start rotation with longer interval for better effect
        setInterval(rotateVideoGallery, 8000); // 8 seconds to allow for transition

        // Preload videos for smoother playback
        videoGalleryItems.forEach(item => {
            const video = item.querySelector('video');
            if (video) {
                video.load();
            }
        });
    });
}

// Modal functionality
const modalContent = {
    narrative: {
        title: "Narrative AI",
        description: "Narrative AI is a web application that allows users to generate images, animate them, and add voice to create a complete narrative. It utilizes the Hugging Face API to generate images based on user input prompts and integrates with a backend server for handling requests.",
        features: [
            "AI Image Generation - Generate high-quality images based on user input prompts using advanced AI models.",
            "Animation Creation - Create smooth and engaging animations from generated images.",
            "Voice Integration - Add voiceovers to your animations to create a complete narrative experience.",
            "Interactive Storytelling - Engage users with interactive storytelling elements that respond to user inputs.",
            "Real-time Rendering - Experience real-time rendering of images and animations for immediate feedback."
        ]
    },
    streamy: {
        title: "Streamy",
        description: "Streamy is a next-generation live streaming platform that combines AI technology with interactive content creation. Our platform enables creators to stream content with enhanced AI features while building meaningful connections with their audience.",
        features: [
            "Google Authentication - Secure and easy login using Google accounts.",
            "Cloud Storage Integration - Store and manage your streaming content using Google Cloud Storage.",
            "Responsive Design - Enjoy a seamless experience across all devices with our responsive design.",
            "Real-time Streaming Interface - Stream content in real-time with low latency and high quality.",
            "AI-powered Content Moderation - Automatically moderate content using AI to ensure a safe streaming environment (upcoming).",
            "Real-time Chat - Engage with your audience through real-time chat during live streams (upcoming).",
            "Custom Streaming Overlays - Personalize your streams with custom overlays (upcoming).",
            "Analytics Dashboard - Gain insights into your streaming performance with our analytics dashboard (upcoming)."
        ]
    },
    medusa: {
        title: "Medusa.io",
        description: "Medusa.io is a creative suite combining multiple AI models for stunning image and video generation. It leverages advanced AI technologies to provide a seamless experience for users looking to create high-quality content.",
        features: [
            "Text to Image Generation - Multiple model support (Stable Diffusion, DALL·E 3, Midjourney, etc.), reference image upload, style and genre customization, high-resolution output.",
            "Image to Video Creation - LumaAI integration, AnimateDiff support, motion transfer capabilities, custom duration and ratio settings.",
            "AI Prompt Generation - Genre-specific suggestions, movie and book reference integration, style customization, mode-specific prompts (image/video).",
            "Frontend - Built with Next.js 14, TypeScript, and Tailwind CSS for a modern and responsive user interface.",
            "Backend - Powered by FastAPI and Python for efficient and scalable backend services.",
            "AI Services - Integration with OpenAI, LumaAI, and Replicate for advanced AI functionalities.",
            "Authentication - Secure user authentication using NextAuth.js.",
            "Storage - Local storage with plans for cloud storage integration."
        ]
    },
    beta: {
        title: "Beta Access Application",
        description: "Join our exclusive beta testing program and help shape the future of AI technology.",
        form: `
            <form id="betaForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-gray-300 mb-2">Name</label>
                        <input type="text" name="name" required class="w-full bg-transparent text-white rounded-lg p-3 border border-gray-600 focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">Email</label>
                        <input type="email" name="email" required class="w-full bg-transparent text-white rounded-lg p-3 border border-gray-600 focus:border-blue-500">
                    </div>
                </div>
                <div>
                    <label class="block text-gray-300 mb-2">Professional Role</label>
                    <select name="role" required class="w-full bg-transparent text-white rounded-lg p-3 border border-gray-600 focus:border-blue-500">
                        <option value="developer">Developer</option>
                        <option value="content_creator">Content Creator</option>
                        <option value="filmmaker">Filmmaker</option>
                        <option value="studio">Studio Professional</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-300 mb-2">Interested Products</label>
                    <div class="space-y-2">
                        <label class="flex items-center">
                            <input type="checkbox" name="products" value="narrative" class="mr-2">
                            <span class="text-gray-300">Narrative AI</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="products" value="streamy" class="mr-2">
                            <span class="text-gray-300">Streamy</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="products" value="medusa" class="mr-2">
                            <span class="text-gray-300">Medusa.io</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label class="block text-gray-300 mb-2">Experience Level</label>
                    <select name="experience" required class="w-full bg-transparent text-white rounded-lg p-3 border border-gray-600 focus:border-blue-500">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="professional">Professional</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-300 mb-2">Why do you want to join the beta?</label>
                    <textarea name="reason" required rows="3" class="w-full bg-transparent text-white rounded-lg p-3 border border-gray-600 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" class="w-full bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:border-white hover:shadow-glow transition-all">
                    Submit Application
                </button>
            </form>
        `
    }
};

function showModal(product) {
    const modal = document.getElementById('modal');
    const content = modalContent[product];
    const modalContentDiv = document.getElementById('modalContent');

    if (product === 'beta') {
        modalContentDiv.innerHTML = `
            <h3 class="modal-title">${content.title}</h3>
            <p class="text-gray-300 mb-4">${content.description}</p>
            <h4 class="text-white font-bold mb-2">Key Features:</h4>
            <ul class="text-gray-300 space-y-2 mb-6">
                <li>• Early Access - Be among the first to test new features and updates</li>
                <li>• Developer Support - Direct access to our development team</li>
                <li>• Influence - Your feedback shapes our product development</li>
                <li>• Free Credits - Test our platforms with complimentary credits</li>
                <li>• Priority Support - Get dedicated technical assistance</li>
                <li>• Community Access - Join our private beta tester community</li>
                <li>• Documentation - Access to detailed technical documentation</li>
                <li>• API Access - Early access to our API endpoints</li>
            </ul>
            <div class="flex justify-center mt-6">
                <a href="beta.html" class="bg-transparent border border-gray-600 text-white py-3 px-8 rounded-lg hover:border-white hover:shadow-glow transition-all text-lg font-semibold">
                    Join Beta Program →
                </a>
            </div>
        `;
    } else {
        // Regular modal content
        modalContentDiv.innerHTML = `
            <h3 class="modal-title">${content.title}</h3>
            <p class="text-gray-300 mb-4">${content.description}</p>
            <h4 class="text-white font-bold mb-2">Key Features:</h4>
            <ul class="text-gray-300 space-y-2 mb-4">
                ${content.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
        `;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Video gallery initialization
    if (videoGalleryItems.length > 0) {
        videoGalleryItems[0].classList.add('active');
        setInterval(rotateVideoGallery, 8000);
        
        videoGalleryItems.forEach(item => {
            const video = item.querySelector('video');
            if (video) {
                video.load();
            }
        });
    }

    // Modal initialization
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Setup Learn More links
        document.querySelectorAll('.card-gradient').forEach((card, index) => {
            const link = card.querySelector('a');
            link.href = 'javascript:void(0)';
            link.onclick = () => showModal(['narrative', 'streamy', 'medusa'][index]);
        });
    }

    // Beta form initialization
    const betaForm = document.getElementById('betaForm');
    if (betaForm) {
        if (typeof emailjs !== 'undefined') {
            emailjs.init(EMAILJS_CONFIG.publicKey);
            betaForm.addEventListener('submit', handleBetaSubmit);
            betaForm.addEventListener('input', handleFormValidation);
        } else {
            console.error('EmailJS not loaded');
            // Disable form submission if EmailJS isn't available
            const submitButton = betaForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Form temporarily unavailable';
            }
        }
    }

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }

    if (mobileMenuButton && mobileMenu && closeMenu) {
        mobileMenuButton.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
    }

    // Consolidated video optimization
    document.querySelectorAll('video').forEach(video => {
        // Initialize video
        initializeVideo(video);

        // Pause videos when not in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(video);

        // Handle low-power mode and background
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                video.pause();
            } else {
                if (video.closest('.active')) {
                    video.play().catch(() => {});
                }
            }
        });
    });
});

// Helper function for video initialization
function initializeVideo(video) {
    video.parentElement.classList.add('video-container');
    
    video.addEventListener('loadeddata', function() {
        video.parentElement.classList.add('loaded');
    });

    video.addEventListener('stalled', function() {
        video.load();
        video.play().catch(() => console.log('Playback failed'));
    });

    video.addEventListener('pause', function() {
        if (document.hidden) {
            video.src = '';
            video.load();
        }
    });
}

// EmailJS configuration
const EMAILJS_CONFIG = {
    publicKey: "DFHk8V0AORV0OzSYa",
    serviceId: "service_qx53ezs",
    betaTemplateId: "template_rbqasms"
};

// Beta form submission
function handleBetaSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.disabled = true;
    submitButton.innerHTML = 'Submitting...';

    // Get selected products with fallback
    const selectedProducts = Array.from(form.querySelectorAll('input[name="products"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ') || 'None selected';

    // Match template variables exactly
    const templateParams = {
        to_name: 'Admin',
        from_name: form.name.value,
        from_email: form.email.value,
        name: form.name.value,
        email: form.email.value,
        role: form.role.value,
        products: selectedProducts,
        experience: form.experience.value,
        reason: form.reason.value,
        reply_to: form.email.value
    };

    // Send email using proper parameter order
    emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.betaTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Application submitted successfully!');
        form.reset();
    })
    .catch(function(error) {
        console.error('FAILED...', error);
        alert('Failed to submit application. Please try again.');
    })
    .finally(function() {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit Application';
    });
}

// Form validation function
function handleFormValidation(e) {
    const input = e.target;
    if (input.validity.valid) {
        input.classList.remove('border-red-500');
        input.classList.add('border-gray-600');
    } else {
        input.classList.remove('border-gray-600');
        input.classList.add('border-red-500');
    }
}