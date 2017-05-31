const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    console.log("Debug Info");
	
	var item=loadAllItems();
	 
	function printInventory(inputs)
	{
		this.inputs=inputs;
		this.actualText=function()
		{
			
			var num=[];
			
			for(var i=0;i<inputs.length;i++)
				for(var j=0;j<item.length;j++)
					if(inputs[i]==item[j].barcode)
					{
						int index=num.indexOf(item[j]);
						if(index!=-1)
							num[index].size++;
						else
						{	num[num.length]=item[j];
							num[num.length-1].size=1;
							
						}
						break;
					}

			var expectText = '***<ûǮ׬�̵�>�����嵥***\n' ;

			var sum=0;
            
			for(var i=0;i<num.length;i++)
            
			{
                
				sum+=num[i].price*num[i].size;
            
				expectText+='���ƣ�'+num[i].name+'��������'+num[i].size+'ƿ�����ۣ�'+num[i].price+'(Ԫ)��С�ƣ�'+num[i].price*num[i].size+'(Ԫ)\n' 
            
			}
            
				expectText+='----------------------\n' +
'�ܼƣ�'+sum+'(Ԫ)\n' +'**********************';
				
				return expectText;

		}

		
	}
				
	
	
    return 'Hello World!';
};
