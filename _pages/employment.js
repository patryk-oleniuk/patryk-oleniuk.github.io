
var withoutAuthor = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
      branch: {
        label: {
          display: false,
        },
      },
      commit: {
        label: { display: false },
        message: {
          displayAuthor: false,
          displayHash: false
        }
      },
      label: { display: false },
    });
//Get the graph container HTML element.

var renderDot = function(commit) {
  return null;
};

var txt = ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . "

const graphContainer = document.getElementById("graph-container");

// Instantiate the graph.
var gitgraph = GitgraphJS.createGitgraph(graphContainer, {
  template: withoutAuthor,
});

const edu = gitgraph.branch("bachelor");

edu.commit({
  subject: '',
  renderDot: renderDot,
})

edu.commit({
  subject: 'Started WUT',
  body: txt,
})

const jobs = edu.branch("summers");

jobs.commit({
  subject: 'UAV Intern',
  body: txt,
})

jobs.commit({
  subject: 'Samsung Intern',
  body: txt,
})

jobs.commit({
  subject: 'National Instruments Intern',
  body: txt,
})

edu.merge({
  branch: jobs,
  subject: 'Finished WUT',
  commitOptions: {
    subject: 'Finished WUT',
    body: txt,
  }
}) //.tag("bachelors")


const graphContainer2 = document.getElementById("graph-container2");

// Instantiate the graph.
var gitgraph2 = GitgraphJS.createGitgraph(graphContainer2, {
  template: withoutAuthor,
});

const e2du = gitgraph2.branch("masters");

e2du.commit({
  subject: '',
  renderDot: renderDot,
})

e2du.commit({
  subject: 'Job at CERN',
  body: txt,
})

e2du.commit({
  subject: 'Started EPFL',
  body: txt,
})


const j2obs = e2du.branch("jobs2")


j2obs.commit({
  subject: 'Hyperloop Internship 1',
  body: txt,
})

j2obs.commit({
  subject: 'Hyperloop Internship 2',
  body: txt,
})

e2du.merge({
  branch: j2obs,
  subject: 'Finished EPFL masters',
  commitOptions: {
    subject: 'Finished EPFL masters',
    body: txt,
  }
}) //.tag("masters")

const newlife = e2du

newlife.commit({
          subject: 'Hyperloop Job',
          body: txt,
        })//.tag('now')

newlife.commit({
          subject: 'SpaceX',
          body: txt,
        })//.tag('now')

newlife.commit({
          subject: '',
          renderDot: renderDot,
        })
