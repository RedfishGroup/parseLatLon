
#
# ParseLatLon  
Parse a string into a longitude-latitude pair suitable for geojson.  
###  



<a name="module_parseLatLon"></a>

## parseLatLon ⇒ <code>Array.&lt;Number&gt;</code>
### Supported Formats:
* DD°MM.MMMM’
* DD.DDDDDD°
* DD° MM' SS"

### Example:
```
parse(`35°25'01"N, 106°58'50"W`) // >> (2) [-106.98055555555555, 35.41694444444444]
parse("35.3434, -106.3434") // >> (2) [-106.3434, 35.3434]
```

**Returns**: <code>Array.&lt;Number&gt;</code> - [longitude, latitude]  
**Author**: Cody Smith  

| Param | Type |
| --- | --- |
| inputString | <code>String</code> | 


* * *

&copy; 2020 Redifish Group LLC