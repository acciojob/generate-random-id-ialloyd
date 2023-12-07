function makeid(l) {
  // write your code here
	let i=1
	let arr='abcdefghijklmnopqrstuvwxyz0123456789'.split('')
	let res=[]
	
	while(i<=l){
		res.push(arr[Math.floor(Math.random()*36)])
		i++;
	}

	return res.join('')
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
 alert(makeid(l));
