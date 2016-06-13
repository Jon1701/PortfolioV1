{{ #projects }}

<!-- Project Start -->
<div class="project-item col-sm-6 col-md-4 col-lg-4">

  <!-- Project Image -->
  <div class="project-image">
    <a href="{{ linkUrl }}" target="_blank">
      <img src="{{ thumbnailUrl }}" class="img-responsive"/>
    </a>
  </div>

  <!-- Button array -->
  <div class="project-code-repositories">
    <div class="btn-group btn-group-justified">

      <!-- Demo button -->
      <div class="btn-group" role="group">
        <a href="{{ demoUrl }}" target="_blank" type="button" role="button" class="btn btn-demo-livedemo btn-code-repository"><span class="fa fa-caret-square-o-right"></span> Demo</a>
      </div>

      <!-- GitHub button-->
      <div class="btn-group" role="group">
        <a href="{{ githubUrl }}" target="_blank" type="button" role="button" class="btn btn-github-demo btn-code-repository"><span class="fa fa-github"></span> GitHub</a>
      </div>

    </div>
  </div> <!-- End Button array -->

  <!-- Project Name -->
  <div class="project-title">
    {{ projectTitle }}
  </div>

  <!-- Project Description -->
  <div class="project-description">
    {{ projectDescription }}
  </div>

</div> <!-- End Project\Column -->

{{ /projects  }}
