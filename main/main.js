const loadAllItems = require('./loadAllItems.js');

module.exports = function printInventory(inputs)
	{
		this.inputs=inputs;
		
			
			var num=[];
			var item=loadAllItems();
			for(var i=0;i<inputs.length;i++)
				for(var j=0;j<item.length;j++)
					if(inputs[i]==item[j].barcode)
					{
						var index=num.indexOf(item[j]);
						if(index!=-1)
							num[index].size++;
						else
						{	num[num.length]=item[j];
							num[num.length-1].size=1;
							
						}
						break;
					}

			var expectText = '***<没钱赚商店>购物清单***\n' ;

			var sum=0;
            
			for(var i=0;i<num.length;i++)
            
			{
                
				sum+=num[i].price*num[i].size;
            
				expectText+='名称：'+num[i].name+'，数量：'+num[i].size+num[i].unit+'，单价：'+num[i].price.toFixed(2)+'(元)，小计：'+(num[i].price*num[i].size).toFixed(2)+'(元)\n' 
            
			}
            
				expectText+='----------------------\n' +
'总计：'+sum.toFixed(2)+'(元)\n' +'**********************';
				
				return expectText;

		

		
	};



