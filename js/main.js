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
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]');
    const status = document.getElementById('formStatus');
    const originalText = btn.textContent;

    status.textContent = '';
    status.className = 'form-status';
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                Accept: 'application/json'
            }
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok) {
            status.textContent = 'Message sent successfully.';
            status.classList.add('success');
            form.reset();
        } else {
            const error = result.errors?.[0]?.message || 'Error sending message. Please try again.';
            status.textContent = error;
            status.classList.add('error');
        }
    } catch {
        status.textContent = 'Network error. Please try again.';
        status.classList.add('error');
    }

    btn.textContent = originalText;
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
