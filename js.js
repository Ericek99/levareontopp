function navigateTo(page) {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        content.innerHTML = `
            <h1>MODELY</h1>
            <img src="https://file.cube.eu/azwesc1xfg246/thumbnail/21/g0/2f/1697548822/752400_360I_00_1920x1920.jpg" alt="Bicycle 1">
            <img src="https://file.cube.eu/azwesc1xfg246/thumbnail/65/84/10/1697548821/752450_360I_00_1920x1920.jpg" alt="Bicycle 2">
            <img src="https://file.cube.eu/azwesc1xfg246/thumbnail/7b/a1/c8/1697549142/752100_360I_00_1920x1920.jpg" alt="Bicycle 3">
        `;
    } else if (page === 'info') {
        content.innerHTML = `
            <h1>AMS ZERO99</h1>
            <p>Najrýchlejšia cesta z bodu A do bodu B po teréne – AMS ZERO99 stanovuje nový štandard rýchlosti, pohodlia a obratnosti.<br> Najľahší karbónový celoodpružený rám, aký sme kedy vyrobili, vďaka prémiovej konštrukcii C:68X.<br>Ponúka dokonalú kombináciu tuhosti a nízkej hmotnosti, zatiaľ čo starostlivo vyladená kinematika poskytuje dokonalú trakciu a ovládanie v teréne.<br> Jednoducho povedané, je rýchlejší. Oveľa rýchlejší.</p>
        `;
    } else if (page === 'contact') {
        content.innerHTML = `
            <h1>Kontaktujte nás</h1>
            <form>
                <label for="name">Meno:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br>
                <label for="message">Správa:</label><br>
                <textarea id="message" name="message"></textarea><br><br>
                <input type="submit" value="Odoslať">
            </form>
        `;
        const form = content.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            console.log('Odoslané dáta:', formData);
            alert('Vaša správa bola odoslaná!');
            form.reset();
        });
    }
}
