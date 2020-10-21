[![view on npm](http://img.shields.io/npm/v/example.svg)](git@github.com:RedfishGroup/parseLatLon.git)

 # Parse a string to a Longitude Latitude pair

 ### 

 Author: Cody Smith


<a name="parse"></a>

## parse(inputString) ⇒
Parse a string to a Longitude Latitude pair

### Supported Formats:
* DD°MM.MMMM’
* DD.DDDDDD°
* DD° MM' SS"

### Example:
```
parse(`35°25'01"N, 106°58'50"W`)
parse("35.3434, -106.3434")
```

**Kind**: global function  
**Returns**: [Longitude:Number,Latitude:Number] Longitude, Latitude  

| Param | Type |
| --- | --- |
| inputString | <code>String</code> | 


* * *

&copy; 2020 Redifish Group LLC