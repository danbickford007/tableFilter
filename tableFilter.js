/*===========================================================================
	TableFilter
  * Uses Prototype (http://prototype.conio.net/)
	*By Dan Bickford
	
	<input field="text" id="search" />
	
	<table>
		<tr class="filterMe">
			<td>Test</td>
			<td>Tester</td>
		</tr>
	</table>
	
	<script>
		TableFilter.new("filterMe", "search", [0]);
	</script>
	
	
---------------------------------------------------------------------------*/

//First arg is class placed on table row to filter
//Second arg is the id of the text field searching off of
//Third arg is an array corresponding to column of table, ie first column(td) is 0, second is 1



var TableFilter = Class.create({
	initialize: function(className, fieldId, rowArray){
		this.className = className;
		this.fieldId = fieldId;
		this.listen();
		this.rowArray = rowArray;
	},
	listen: function(){
		var elem = $(this.fieldId);
		if (elem.addEventListener){
				 var me = this;
		     elem.addEventListener ("keyup",function(){
						me.filter(me.className, me.fieldId, me.rowArray)
					},false);
			
		 }else if (elem.attachEvent){
				 var me = this;
		     elem.attachEvent ('onkeyup', function(){
						me.filter(me.className, me.fieldId, me.rowArray)
				 });
		 }
	},
	showAllResults: function(rows){
		for(var i=0; i<rows.length; i++){
			rows[i].style.display = ""
		}
	},
	checkMatch: function(array, row){
		var match = false;
		for(var i=0; i<array.length; i++){
			if(row.getElementsByTagName("td")[array[i]].innerHTML.toLowerCase().indexOf(text.toLowerCase()) != -1){
				match = true
			}
		}
		return match;
	},
	filter: function(className, fieldId, rowArray){
		rows = document.getElementsByClassName(className);
		text = $(fieldId).value;
		this.showAllResults(rows);
		for(var i=0; i<rows.length; i++){
			match = this.checkMatch(rowArray, rows[i]);
			if(text == "" || text == " "){
				rows[i].style.display = ""
			}else if(match){
				rows[i].style.display = ""
			}else{
				rows[i].style.display = "none"
			}
		}
	}
})


