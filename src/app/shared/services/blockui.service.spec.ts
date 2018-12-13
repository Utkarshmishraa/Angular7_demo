import { TestBed, async, fakeAsync, tick,ComponentFixture,flush } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { Component, OnInit,ViewChild,ViewChildren,QueryList,DebugElement } from '@angular/core';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { Router, RouterOutlet } from "@angular/router";

import { NgModule } from '@angular/core';
import { BrowserModule,By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule,ControlValueAccessor,FormControl,FormGroup,FormGroupDirective,NG_VALUE_ACCESSOR,Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { SharedService } from '../../shared/services/shared.service';
import { ConfigService } from '../../shared/services/config.service';
import { AuthService } from '../../shared/services/auth.service';
import { BlockUIService } from '../../shared/services/blockui.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MessageBus } from './message-bus.service';

class MockRouter { public navigate() { }; }
let service: BlockUIService;
let backend: MockBackend;

describe('BlockUIService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
       
      ],
      imports: [
        BrowserAnimationsModule,
        HttpModule,
        JsonpModule, RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        Http,
        ConfigService,
        AuthService,
        SharedService,
        MockBackend,
        BaseRequestOptions,
        MessageBus, {provide: LocationStrategy, useClass: HashLocationStrategy}, SharedService, ConfigService, Location, AuthService,BlockUIService,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: Router, useClass: MockRouter },
      ]
    }).compileComponents();
    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(BlockUIService);
    
  }));

  it('should check for BlockUIAngular function', fakeAsync(() => {
    service.BlockUIAngular();
    tick();
  }));
  it('should check for UnBlockUIAngular function', fakeAsync(() => {
    // setTimeout(() => {
    //     this.blockUI.stop(); // Stop blocking
    // }, 2000);
    service.UnBlockUIAngular();
    tick(3000);
  }));
  it('should check for false condition of BlockTinyAngular function', fakeAsync(() => {
    let loader = false;
    service.BlockTinyAngular(loader);
    tick();
  }));
  it('should check for true condition of BlockTinyAngular function', fakeAsync(() => {
    let loader = true;
    service.BlockTinyAngular(loader);
    tick();
  }));
  it('should check for pushBlockUI function', fakeAsync(() => {
    service.pushBlockUI();
    tick();
  }));
  it('should check for popBlockUI function', fakeAsync(() => {
    // this test case is failing need to look for "2 timer(s) still in the queue."
    setTimeout (() => {
      service.popBlockUI();
      service.UnBlockUIAngular();
      tick(2000);
      
    }, 2000);

   
    tick(2000);
    
    // discardPeriodicTasks();
  }));
 
});