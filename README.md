shivs-angular5-painter
======================

Angular5 component to paint on a canvas on desktop or touch devices

# UPDATE
DATE: `2018-08-07`
- Angular 6 is supported in version 1.1.0
- Angular 5 is supported in version 1.0.1

# Installation
```bash
npm install shivs-angular5-painter --save 
```

## Usage
* `Add PainterLibraryModule in your app.module.ts`
```javascript
import {PainterLibraryModule} from 'shivs-angular5-painter';

@NgModule({
    ...
    imports: [PainterLibraryModule]
})
```
```html
<canvas-painter #painter color="#00FF00" lineWidth="5" (paintStart)="onPaintStart()" (paintEnd)="onPaintEnd()"
                (undoLength)="onUndoLengthChanged($event)" (redoLength)="onRedoLengthChanged($event)"
                (isEmpty)="onIsEmptyChanged($event)"></canvas-painter>
```

##### Options

```javascript
{
  clipBounds: { x: 0, y: 0, width: 0, height: 0 }  //Set a region that can be drawn on
  canvasWidth: 600, //px
  canvasHeight: 600, //px
  color: '#000',
  lineWidth: 10, //px
  cacheSize: 10 // boolean or a number of versions to keep in memory
}
```

## Special Thanks
Special thanks to pwambach (https://github.com/pwambach/angular-canvas-painter) and his work with the Angular1 directive. This was written to work with Angular5 because we needed it to work in our application that is written with Angular5. 


## License
MIT
