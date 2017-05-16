(function(){
    function BinarySearch(arr){
        var oThis = this;

        oThis.elements = arr;
        oThis.counter = 0;

        oThis.findElement = function(elem){
            console.log("Searching for: " + elem);
            oThis.counter = 0;
            return binary_search(0, oThis.elements.length - 1, elem);
        };

        function binary_search(min, max, elem){
            console.log("Run : " + (++oThis.counter) + " with min: " + min + " and max: " + max);
            
            if(min > max) {
                console.log("Item not found.");
                return -1;
            }

            var cur_index = Math.floor((min + max ) / 2);
            
            if(oThis.elements[cur_index] == elem){
                console.log("Found the element " + elem + " at position: " + cur_index + ".");
                return cur_index;
            }
            else if(elem < oThis.elements[cur_index]){
                max = cur_index - 1;
            }
            else{
                min = cur_index + 1;
            }
            
            return binary_search(min, max, elem);
        }
    }


    var orderedNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
    var bs = new BinarySearch(orderedNumbers);
    console.log(bs.findElement(42));
    console.log(bs.findElement(23));
})();