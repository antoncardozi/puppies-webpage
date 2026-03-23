document.addEventListener('DOMContentLoaded', () => {
    /* --- New Puppy Checklist Accordion --- */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const parentItem = header.closest('.accordion-item');
            const icon = header.querySelector('.icon');

            // Close other items (exclusive behavior)
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content.id !== targetId) {
                    content.style.maxHeight = null;
                    content.closest('.accordion-item').classList.remove('active');
                    content.closest('.accordion-item').querySelector('.icon').innerText = '+';
                }
            });

            // Toggle current item
            if (targetContent.style.maxHeight) {
                // If already open, close it
                targetContent.style.maxHeight = null;
                parentItem.classList.remove('active');
                icon.innerText = '+';
            } else {
                // If closed, open it
                targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
                parentItem.classList.add('active');
                icon.innerText = '-';
            }
        });
    });

    /* --- Performance & Tracking (Optional/Manual Check) --- */
    // Add small delay to images if not yet loaded? 
    // Already using native loading="lazy" for all except hero.

    /* --- Smooth Scrolling Links --- */
    // Already handled by HTML class "scroll-smooth" for modern browsers.
    // This is just to ensure it works for all scenarios.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
