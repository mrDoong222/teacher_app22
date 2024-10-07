// Suggested code may be subject to a license. Learn more: ~LicenseLog:1741949816.

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-container');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Set the initial view to month view
      // ... other configuration options (e.g., events, event handlers) ...
    });
    calendar.render();
  });

// ... (Add other JavaScript for notes and schedule functionality) ...
