// Toggle collapsible sections
function toggleSection(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.toggle('active');
    content.classList.toggle('active');
}

// Copy template text to clipboard
function copyTemplate(button) {
    // Find the template-full div (the complete template) if it exists, otherwise use template-text
    const template = button.closest('.template');
    const fullTemplate = template.querySelector('.template-full');
    const templateText = fullTemplate ? fullTemplate.innerText : button.closest('.template-text').innerText;
    
    navigator.clipboard.writeText(templateText).then(() => {
        const originalText = button.innerText;
        button.innerText = '✓ Copied!';
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    }).catch(err => {
        alert('Failed to copy template. Please try again.');
    });
}

// Toggle template expansion
function toggleTemplate(button) {
    const template = button.closest('.template');
    const preview = template.querySelector('.template-preview');
    const full = template.querySelector('.template-full');
    
    if (full.style.display === 'none' || !full.style.display) {
        full.style.display = 'block';
        preview.style.display = 'none';
    } else {
        full.style.display = 'none';
        preview.style.display = 'block';
    }
}

// Open WhatsApp community link
function openWhatsApp(event) {
    event.preventDefault();
    // Replace with actual WhatsApp community link
    window.open('https://chat.whatsapp.com/YOUR_LINK_HERE', '_blank');
}

// Open share menu
function openShareMenu(event) {
    event.preventDefault();
    // You can implement a custom share menu or use native share API
    if (navigator.share) {
        navigator.share({
            title: 'Save HIIA',
            text: 'Help protect teacher-directed learning in HIIA. Share your story with TVUSD leadership.',
            url: 'https://savehiia.com'
        });
    } else {
        // Fallback to showing social buttons
        const socialSection = document.querySelector('.social-section');
        socialSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check if any collapsible section is already marked as active
    const activeHeader = document.querySelector('.collapsible-header.active');
    
    // Only auto-expand first section if no section is already active
    if (!activeHeader) {
        const firstHeader = document.querySelector('.collapsible-header');
        if (firstHeader) {
            firstHeader.classList.add('active');
            firstHeader.nextElementSibling.classList.add('active');
        }
    }
});
