# react-dropdown-list
An easy to use dropdown menu for ReactJs.

## Usage
Import using `import DropdownList from location` (suggest adding to `src` folder)

````
const menu = {
  title: "Links",
  items: [ 
    {
     "title":"Google", 
     "path":"http://google.com" 
    },
    {
     "title":"BBC", 
     "path":"http://news.bbc.co.uk" 
    },
  ]
}
return <DropdownList menu={menu} />
````

### Options
Menu items must be an array and passed as `menu`. Must include a title and some items. 

There is an additional prop `isOpen` which may be passed as `isOpen={true}` if you want the menu to be open on mount. This defaults to false.

### Styling
Skeleton CSS file included with no styling. Element classes follow [BEM practices](http://getbem.com/).
