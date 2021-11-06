for (email in emails.email) {
	var em = emails.email[email];
	var accounts = em.accounts;
	for (account in accounts) {
		console.log(email);
		console.log(account);
		var tags = accounts[account].tags;
		for (tag of tags) {
			console.log(tag)
		}
		
	}
	
	
}