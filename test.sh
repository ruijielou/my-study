diffInfo=`git diff`
 
if [ "$diffInfo" != "" ]; then
git add .
git commit 
# git push -u origin master
fi