import { Component, OnInit } from '@angular/core';
import Dynamsoft from 'dwt';
import { WebTwain } from 'dwt/dist/types/WebTwain';

@Component({
  selector: 'app-dwt',
  templateUrl: './dwt.component.html',
  styleUrls: ['./dwt.component.css']
})
export class DwtComponent implements OnInit {
  DWObject: WebTwain |undefined;
  selectSources: HTMLSelectElement|undefined;
  containerId = 'dwtcontrolContainer';
  bWASM = false;
  constructor() { }
  ngOnInit(): void {
    Dynamsoft.DWT.Containers = [{ WebTwainId: 'dwtObject', ContainerId: this.containerId, Width: '300px', Height: '400px' }];
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => { this.Dynamsoft_OnReady(); });
    Dynamsoft.DWT.ResourcesPath = '/assets/dwt-resources';
    Dynamsoft.DWT.ProductKey = "t0153KQMAALpUL8PACZFo5cESNNODbGSuInlSZHwF/OEoF4sBOEsmakmtr1ltTd7+LrvR8mGHROqt2HPip9rGm81wAtB5MjRsKMeG4RgUE/lfSae5MbyblxmpBjd1TmNv3Zk39otOncbwgJHYWH/6xs189JD9zK3hASOxcTM3xu9zXvUfvwLaambqGR4wEpua+WoWormUJD88F6K/";     Dynamsoft.DWT.Load();
  }

  Dynamsoft_OnReady(): void {
    this.DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
	this.bWASM = Dynamsoft.Lib.env.bMobile || !Dynamsoft.DWT.UseLocalService;
    let count = this.DWObject.SourceCount;
    this.selectSources = <HTMLSelectElement>document.getElementById("sources");
    this.selectSources.options.length = 0;
    for (let i = 0; i < count; i++) {
      this.selectSources.options.add(new Option(this.DWObject.GetSourceNameItems(i), i.toString()));
    }
  }

  acquireImage(): void {
    if (!this.DWObject)
      this.DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
      if(this.selectSources){

        if (this.DWObject.SourceCount > 0 && this.DWObject.SelectSourceByIndex(this.selectSources.selectedIndex)) {
          const onAcquireImageSuccess = () => { this.DWObject?.CloseSource(); };
          const onAcquireImageFailure = onAcquireImageSuccess;
          this.DWObject.OpenSource();
          this.DWObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
        } else {
          alert("No Source Available!");
        }

      }

    

  }

  openImage(): void {
    if (!this.DWObject)
      this.DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
    this.DWObject.IfShowFileDialog = true;
    /**
     * Note, this following line of code uses the PDF Rasterizer which is an extra add-on that is licensed seperately
     */
    this.DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
    this.DWObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL,
      function () {
        //success
      }, function () {
        //failure
      });
  }
}