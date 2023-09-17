push:
	git push origin dev

pr:
	gh pr create --web -B 
	
ppr:
	git push origin dev
	gh pr create --web -B 


