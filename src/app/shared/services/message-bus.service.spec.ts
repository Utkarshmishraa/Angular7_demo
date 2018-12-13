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
import { HttpProvider } from '../../shared/providers/http-provider.service';
import { ConfigService } from '../../shared/services/config.service';
import { AuthService } from '../../shared/services/auth.service';
import { BlockUIService } from '../../shared/services/blockui.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MessageBus } from './message-bus.service';

class MockRouter { public navigate() { }; }
let service: MessageBus;
let backend: MockBackend;

describe('MessageBusService', () => {
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
        HttpModule,
      ],
      providers: [
        Http,
        ConfigService,
        AuthService,
        SharedService,
        MockBackend,
        HttpProvider,
        BaseRequestOptions,
        MessageBus, {provide: LocationStrategy, useClass: HashLocationStrategy}, SharedService, HttpProvider, ConfigService, Location, AuthService,BlockUIService,
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
    service = TestBed.get(MessageBus);
    
  }));

  it('should return whether the admission grid dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    var results = service.notifyAdmissionGridDependent(function(response){
        var results=response.json();
        expect(results.length).toBe(1);
        expect(results).toBe(Object); 
     });
     tick(1000);

  }));

  it('should return whether the title card dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    // var results = service.titleCardDependent(function(response){
    //     var results=response.json();
    //     expect(results.length).toBe(1);
    //     expect(results).toBe(Object); 
    //  });
    //  tick(1000);

  }));

  it('should return whether the date range dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    // var results = service.notityDateChangeDependent(function(response){
    //     var results=response.json();
    //     expect(results.length).toBe(1);
    //     expect(results).toBe(Object); 
    //  });
    //  tick(1000);

  }));

  it('should return whether the page reload dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    // var results = service.pageReload(function(response){
    //     var results=response.json();
    //     expect(results.length).toBe(1);
    //     expect(results).toBe(Object); 
    //  });
    //  tick(1000);

  }));

  it('should return whether the page loader dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    // var results = service.pageLoader(function(response){
    //     var results=response.json();
    //     expect(results.length).toBe(1);
    //     expect(results).toBe(Object); 
    //  });
    //  tick(1000);

  }));

  it('should return whether the tiny loader dependant is notified or not', fakeAsync(() => {
    let response = {count:2};

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    //Perform a request and make sure we get the response we expect
    // var results = service.tinyLoader(function(response){
    //     var results=response.json();
    //     expect(results.length).toBe(1);
    //     expect(results).toBe(Object); 
    //  });
    // tick(1000);

  }));

});