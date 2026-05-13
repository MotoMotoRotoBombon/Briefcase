document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('open');
    });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.skill-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && !card.dataset.cat.includes(filter));
        });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target)
        });
        if (response.ok) {
            alert('Message sent successfully!');
            e.target.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch {
        alert('Network error. Please try again.');
    }
    btn.textContent = 'Send Message';
    btn.disabled = false;
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});