function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  AOS.init();


  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Adjust speed of counting

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20); // Adjust animation speed
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger animation when section is visible
    const section = document.querySelector(".path-to-success");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect(); // Run animation once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});

function scrollCourses(direction) {
    const container = document.querySelector(".course-container");
    const scrollAmount = 300; // Adjust scroll distance
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

