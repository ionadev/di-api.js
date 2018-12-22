# Code of Conduct
Discord Images has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development
All work on Discord Images happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization
We will do our best to keep the master branch in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with. We recommend that you use the latest stable version of Discord Images.

If you send a pull request, please do it against the master branch. We maintain stable branches for major versions separately but we don’t accept pull requests to them directly. Instead, we cherry-pick non-breaking changes from master to the latest stable major version.

## Semantic Versioning
Discord Images follows semantic versioning. We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

We tag every pull request with a label marking whether the change should go in the next patch, minor, or a major version. We release new patch versions every few weeks, minor versions every few months, and major versions one or two times a year.

Every significant change is documented in the changelog file.

# Bugs

## Where to Find Known Issues
We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

## Reporting New Issues
The best way to get your bug fixed is to provide a reduced test case. This JSFiddle template is a great starting point.

## Security Bugs
Discord Images has a bounty program for the safe disclosure of security bugs. With that in mind, please do not file public issues; go through the process outlined on that page.

## How to Get in Touch
There is a active community of Discord Images users on the Discord chat platform in case you need help with Discord Images.

## Proposing a Change
If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

# Your First Pull Request
Working on your first Pull Request? You can learn how from this free video series:

## How to Contribute to an Open Source Project on GitHub

To help you get your feet wet and get you familiar with our contribution process, we have a list of good first issues that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

## Sending a Pull Request
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. For API changes we may need to fix our internal uses at Facebook.com, which could cause some delay. We’ll do our best to provide updates and feedback throughout the process.

Before submitting a pull request, please make sure the following is done:

Fork the repository and create your branch from master.

If you’ve fixed a bug or added code that should be tested, add tests!

Ensure the test suite passes

Format your code.
