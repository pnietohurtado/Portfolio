
const themeBtn = document.getElementById("changeTheme"); 
const themeNow = "light"; 

themeBtn.addEventListener('click', function(){
    if(themeNow === "light"){
        document.body.setAttribute("data-theme", "dark");
        themeNow = "dark"; 
    }else if(themeNow === "dark"){
        document.body.setAttribute("data-theme", "light");
        themeNow = "light"; 
    }
}); 

document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarNav = document.querySelector('.sidebar-nav');
    
    menuToggle.addEventListener('click', function() {
        sidebarNav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Navigation Link Active State
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // If on mobile, close the menu after selection
            if (window.innerWidth <= 992) {
                sidebarNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Social Links Hover Effect
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Page Navigation Simulation
    const pageDots = document.querySelectorAll('.page-dots .dot');
    const currentPage = document.querySelector('.current-page');
    
    pageDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Update active dot
            pageDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // Update page number
            const pageNumber = (index + 1).toString().padStart(2, '0');
            currentPage.textContent = pageNumber;
            
            // In a real implementation, this would load new content
            console.log(`Navigating to page ${pageNumber}`);
        });
    });
    
    // Text Content Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content elements
    const contentElements = document.querySelectorAll('.text-content, .info-table-container');
    
    contentElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Auto-rotate page dots (optional feature)
    let currentDotIndex = 0;
    
    function rotatePageDots() {
        pageDots.forEach(dot => dot.classList.remove('active'));
        pageDots[currentDotIndex].classList.add('active');
        
        const pageNumber = (currentDotIndex + 1).toString().padStart(2, '0');
        currentPage.textContent = pageNumber;
        
        currentDotIndex = (currentDotIndex + 1) % pageDots.length;
    }
    
    // Uncomment to enable auto-rotation (every 5 seconds)
    // setInterval(rotatePageDots, 5000);
    
    // Handle responsive behavior
    function handleResponsive() {
        if (window.innerWidth <= 992) {
            // Mobile behavior
            menuToggle.style.display = 'block';
        } else {
            // Desktop behavior
            menuToggle.style.display = 'block';
            sidebarNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
    
    // Initial call and window resize listener
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
    
    // Add some console styling for fun
    console.log('%c✨ Welcome to Hafiz Hossein\'s Portfolio ✨', 
        'color: #4A6CF7; font-size: 16px; font-weight: bold;');
    console.log('%cDesigned with precision to match the provided image.', 
        'color: #666; font-size: 12px;');
});

