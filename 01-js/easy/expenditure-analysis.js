/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=new Array();

  for(let i=0;i<transactions.length;i++)
  {
    let cat=transactions[i].category;
    let pr=transactions[i].price;

    if(arr.length==0)
    {
      arr.push({
        category:cat,
        totalSpent:pr
      })
    }
    else
    {
      let flag=1;
      for(let j=0;j<arr.length;j++)
      {
        if(arr[j].category==cat)
        {
          arr[j].totalSpent+=pr;
          flag=0;
          break;
        }
      }
      if(flag)
      {
        arr.push({
          category:cat,
          totalSpent:pr
        })
      }
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
