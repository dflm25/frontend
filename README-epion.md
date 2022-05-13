# Notes for Epion Health Devs

_These are notes for maintaining this repo for Epion developers. You don't need to read this if you are a prospective employee._


There are two GitHub repos for this code base.

* https://github.com/EpionHealth/frontend-interview/ - the incomplete project for use in interviews.
* https://github.com/EpionHealth/frontend-interview-completed/ - a completed version of the project for reference.

The incomplete project has the master branch. There is a `completed` branch that is only in the `completed` project.

If you need to make updates to the incomplete project, you should do something like this:

```shell
git clone git@github.com:EpionHealth/frontend-interview.git
cd frontend-interview
# make your changes on the master branch...
git commit
git push
git checkout completed
git pull
git rebase master
git remote add completed git@github.com:EpionHealth/frontend-interview-completed.git
git push -u --force-with-lease completed head
git checkout master
```
