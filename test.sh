diffInfo=`git diff`
 
if [ "$diffInfo" != "" ]; then
git add .
git commit -m "自动提交的更改"
git push -u origin master
fi