import React, { useRef, useEffect, useState } from 'react';

export default function InfoLine(props) {
  if (props.type === 'project') {
    return (
      <div key={props.line.id}>
        <h2>{props.line.title}</h2>
        <h5>{props.line.url}</h5>
        <>
          {props.line.description.split('\n').length < 2 ? (
            <>
              <p> {props.line.description} </p>
            </>
          ) : (
            <ul>
              {props.line.description.split('\n').map(function (bl) {
                return (
                  <>
                    <li key={props.line._id + bl}> {bl} </li>
                  </>
                );
              })}
            </ul>
          )}
        </>
        <img src={props.line.screen} alt=' image here' />
        {console.log(props.line.screen)}
      </div>
    );
  } else {
    return (
      <div key={props.line.id}>
        <h2>{props.line.title}</h2>
        <h5>{props.line.company}</h5>
        <p>
          {' '}
          {props.line.from.getDate()}/ {props.line.from.getMonth()}/{' '}
          {props.line.from.getFullYear()} to {props.line.to.getDate()}/{' '}
          {props.line.to.getMonth()}/ {props.line.to.getFullYear()}
        </p>
        <>
          {props.line.description.split('\n').length < 2 ? (
            <>
              <p> {props.line.description} </p>
            </>
          ) : (
            <ul>
              {props.line.description.split('\n').map(function (bl) {
                return (
                  <>
                    <li key={props.line._id + bl}> {bl} </li>
                  </>
                );
              })}
            </ul>
          )}
        </>
      </div>
    );
  }
}
