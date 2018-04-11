#!/usr/bin/env node

const {sha3} = require('ethereumjs-util')

for (let i = 0; i < 255; i++) {
	var keccak256hash = sha3(i).toString('hex')
	if (keccak256hash == "db81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365") {
		console.log("[*] Winner: ", i)
	}
}
