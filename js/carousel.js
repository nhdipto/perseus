let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
    testimonials[index].style.transform = `translateX(-${index * 100}%)`;
    index = (index + 1) % testimonials.length;
}, 3000);
