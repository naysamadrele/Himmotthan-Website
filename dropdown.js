function showDropdownContent() {
    document.querySelectorAll('.dropdown-content').forEach(function(el) {
        el.classList.add('show');
    });
}

function hideDropdownContent() {
    document.querySelectorAll('.dropdown-content').forEach(function(el) {
        el.classList.remove('show');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        var dropbtn = dropdown.querySelector('.dropbtn');
        var content = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            content.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href').slice(1);
            var target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function openModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = '';
}
window.onclick = function(event) {
    for (let i = 1; i <= 6; i++) {
        let modal = document.getElementById('modal' + i);
        if (modal && event.target === modal) {
            closeModal('modal' + i);
        }
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        for (let i = 1; i <= 6; i++) closeModal('modal' + i);
    }
});

function animateCountUp(element, target, duration = 1500) {
    let start = 0;
    let startTime = null;
    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        element.textContent = value.toLocaleString() + "+";
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString() + "+";
        }
    }
    requestAnimationFrame(update);
}

function runInsightsCounter() {
    const counters = document.querySelectorAll('.insight-value[data-target]');
    counters.forEach(counter => {
        if (!counter.classList.contains('counted')) {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            animateCountUp(counter, target);
            counter.classList.add('counted');
        }
    });
}

const insightsSection = document.querySelector('.insights-section');
if (insightsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runInsightsCounter();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(insightsSection);
}
