window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
    /**
     * Base HTML
     */
    var job_html ="";
    var vol_html = "";
    var degree_html = "";
    var hobbies_hmtl = "";
    $.get("html/job-base.html", function(html) {
        job_html = html;
        $.get("html/school-base.html", function(html) {
          degree_html = html;
            $.get("html/volunteer-base.html", function(html) {
                vol_html = html;
                $.get("html/hobbies-base.html", function(html) {
                hobbies_hmtl = html;

                    $.getJSON("js/datas.json?v=3", function(json) {
                        $('#experience_content').html('');    
                        json.Jobs.forEach((key,index)=>{
                            var html = job_html; 
                            html = html.replace('%%DATE%%', $(key)[0].DATE);
                            html = html.replace('%%WHERE%%', $(key)[0].WHERE);
                            html = html.replace('%%JOBS%%', $(key)[0].JOBS);
                            html = html.replace('%%DESC%%', $(key)[0].DESC);
                            $('#experience_content').append(html);
                        });
                        $('#education_content').html('');
                        json.Degrees.forEach((key,index)=>{
                            var html = degree_html; 
                            html = html.replace('%%DATE%%', $(key)[0].DATE);
                            html = html.replace('%%SCHOOL_NAME%%', $(key)[0].SCHOOL_NAME);
                            html = html.replace('%%DEGREE%%', $(key)[0].DEGREE);
                            html = html.replace('%%DESC_1%%', $(key)[0].DESC_1);
                            $('#education_content').append(html);
                        });
                        $('#volonteer_content').html('');
                        json.Volunteer.forEach((key,index)=>{
                            var html = vol_html; 
                            html = html.replace('%%DATE%%', $(key)[0].DATE);
                            html = html.replace('%%MISSION%%', $(key)[0].MISSION);
                            html = html.replace('%%NAME%%', $(key)[0].NAME);
                            html = html.replace('%%DESC%%', $(key)[0].DESC);
                            $('#volonteer_content').append(html);
                        });
                        $('#interests_content').html('');
                        json.Hobbies.forEach((key,index)=>{
                            var html = hobbies_hmtl; 
                            html = html.replace('%%NAME%%', $(key)[0].NAME);
                            html = html.replaceAll('%%PICS%%', $(key)[0].PICS);
                            console.log(html)
                            $('#interests_content').append(html);
                        });
                    });
                });
            });
        });
    });