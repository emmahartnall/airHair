document.querySelectorAll('.twistie').forEach(twistie => {
    twistie.addEventListener('click', function () {
        const subList = this.nextElementSibling;

        // Toggle the "open" class on the twistie and the sublist
        this.classList.toggle('open');
        if (subList && subList.classList.contains('sub-list')) {
            subList.classList.toggle('open');
        }
    });
});