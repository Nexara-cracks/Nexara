document.addEventListener('DOMContentLoaded', function() {
    const planningGrid = document.getElementById('planning-grid');

    const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

        const events = [
            { day: 'Lundi', time: 'Publié', name: 'Wemod Pro', image: './images/app/wemod-logo-1024-dafdcb2c3b.png' },
            { day: 'Mardi', time: 'Publié', name: 'Apower Mirror', image: './images/app/Apowermirror.png' },
            { day: 'Mercredi', time: 'dans la journée', name: 'Clip Studio Paint', image: './images/app/clip_studio_paint_macos_bigsur_icon_189480.webp' },
            { day: 'Jeudi', time: 'dans la journée', name: 'Deepl Pro', image: './images/app/png-clipart-deepl-logo-thumbnail-tech-companies-removebg-preview.png' },
            { day: 'Vendredi', time: 'dans la journée', name: 'KeepStream', image: './images/app/keepstream.png' },
            { day: 'Samedi', time: 'dans la journée', name: 'CC cleaner Buisness', image: './images/app/CCleaner_logo_V4.png' },
            { day: 'Dimanche', time: 'dans la journée', name: 'DNS Changer', image: './images/app/dnschanger.jpg' },
        ];

    const startDate = new Date();
    const getWeekDates = (startDate) => {
        const dates = [];
        const currentDate = new Date(startDate);
        const dayOfWeek = currentDate.getDay();
        const diff = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        currentDate.setDate(diff);
        for (let i = 0; i < 7; i++) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const weekDates = getWeekDates(startDate);

    weekDays.forEach((day, index) => {
        const dayColumn = document.createElement('div');
        dayColumn.classList.add('planning-day');

        const dayHeader = document.createElement('h3');
        dayHeader.textContent = day;
        dayColumn.appendChild(dayHeader);

        const dateHeader = document.createElement('h4');
        dateHeader.textContent = weekDates[index].toLocaleDateString();
        dayColumn.appendChild(dateHeader);

        const dayEvents = events.filter(event => event.day === day);
        dayEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('planning-event');

            const eventImage = document.createElement('img');
            eventImage.src = event.image;
            eventImage.alt = event.name;

            const eventDetails = document.createElement('div');

            const eventName = document.createElement('p');
            eventName.textContent = event.name;

            const eventTime = document.createElement('p');
            eventTime.textContent = event.time;
            eventTime.classList.add('planning-event-time');

            eventDetails.appendChild(eventName);
            eventDetails.appendChild(eventTime);
            eventElement.appendChild(eventImage);
            eventElement.appendChild(eventDetails);
            dayColumn.appendChild(eventElement);
        });

        planningGrid.appendChild(dayColumn);
    });
});
