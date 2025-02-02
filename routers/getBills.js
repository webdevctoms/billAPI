const express = require("express");
const router = express.Router();
const {Bills} = require("../models/billModel");
//return all bills
router.get("/",(req,res) => {
	return Bills.find({}).limit(20)

	.then(bills => {
		console.log("Length: ",bills.length);
		return res.json({
			status:200,
			data:bills.map(bill => bill.serialize())
		});
	})
	.catch(err => {
		console.log("error getting data: ",err);
		return res.json({
			status:500,
			message:"An error occured"
		})
	})
});

router.get("/bill",(req,res) => {
	let legId = req.query.legid;
	return Bills.find({legisinfo_id:legId})

	.then(bill => {
		console.log("Length single: ",bill.length);
		return res.json({
			status:200,
			data:bill
		});
	})
	.catch(err => {
		console.log("error getting data: ",err);
		return res.json({
			status:500,
			message:"An error occured"
		})
	})
});


module.exports = {router};