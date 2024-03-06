if(typeof pos === "undefined"){
			pos = this.table.options.addRowPos;
		}
		
		if(pos === "pos"){
			pos = true;
		}
		
		if(pos === "bottom"){
			pos = false;
		}
		
		return pos;
	}
var row = data instanceof Row ? data : new Row(data || {}, this),
		top = this.findAddRowPos(pos),
		allIndex = -1,
		activeIndex, chainResult;//yes

if(!index){
			chainResult = this.chain("row-adding-position", [row, top], null, {index, top});
			
			index = chainResult.index;
			top = chainResult.top;
		}
		
