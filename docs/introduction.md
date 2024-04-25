# Introduction - Airport Control Programme

## Purpose and Benefits

This software programme is created for the Air Traffic Control Team to control the flow of planes at the airport. The use of the programme in managing air traffic flying to and from the airport helps in minimizing human errors with built-in restrictions. The current situation at the airport is reflected in the programme as soon as circumstances change, including a change in the airport's maximum capacity, planes landing and taking off, etc., so that the Team will be able to react immediately. The benefits can be summarized below:

- The safety of all users of the airport including passengers and airport employees is significantly enhanced through automation of air traffic control.
- Air Traffic Controllers can retrieve important information about the airport (e.g. which planes are at the airport) instantly through the programme.
- The programme shortens the time needed for communication in the Air Traffic Control Team in response to a change in the situation at the airport.
- The programme is embedded with air control protocols and restrictions to minimize human errors. For example, a plane cannot be instructed to land when the airport is full.
- As the time required to direct air traffic shortens with the implementation of the programme, the flow of traffic will be boosted so that the airport can receive more planes in a day, fostering business growth.


## Features

The programme assists the Director of the Air Traffic Control Team in managing the maximum capacity of the airport, and enables Air Traffic Controllers to instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport, or instruct a plane to take off from an airport as long as it is currently at the airport.

The commands available for use in the programme are explained below:

| Command                                     | Parameters (see *italics* in Command)                 | Use of Command                                                      | Conditions of Use                                                             |
| ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| airport.getMaxCapacity()                    | Nil                                                   | Check maximum capacity of the airport                               | Nil                                                                           |
| airport.modifyMaxCapacity(*newMaxCapacity*) | Input newMaxCapacity (in number, e.g. 20) in brackets | Modify maximum capacity of the airport                              | Nil                                                                           |
| airport.getNumOfPlanesAtAirport()           | Nil                                                   | Check how many planes are at the airport                            | Nil                                                                           |
| *plane*.getIsAtAirport()                    | Plane to be changed to the target plane               | Check whether the target plane is at the airport                    | Nil                                                                           |
| airport.instructToLand(*plane*)             | Plane to be changed to the target plane in brackets   | Instruct the target plane to land                                   | The target plane must not be at the airport, and the airport must not be full |
| *plane*.getIntructedToLand()                | Plane to be changed to the target plane               | Check whether the target plane has received instruction to land     | Nil                                                                           |
| airport.addPlane(*plane*)                   | Plane to be changed to the target plane in brackets   | Add the target plane to the airport when it has landed              | The target plane must not be at the airport, and the airport must not be full |
| airport.instructToTakeOff(*plane*)          | Plane to be changed to the target plane in brackets   | Instruct the target plane to take off                               | The target plane must be at the airport                                       |
| *plane*.getIntructedToTakeOff()             | Plane to be changed to the target plane               | Check whether the target plane has received instruction to take off | Nil                                                                           |
| airport.removePlane(*plane*)                | Plane to be changed to the target plane in brackets   | Remove the target plane from the airport when it has taken off      | The target plane must be at the airport                                       |

## Risks

Members of the Air Traffic Control Team need to be familiar with the commands they are responsible to use. Although some of the logic of the air traffic protocols have been implemented, the programme does not cover rules and regulations outside the user requirements. It should not be the only tool to be relied on for directing air traffic.

As the programme is still in its initial stage of development, please report any issues users may discover or any additional requirements for the programme to the developer so that the functionalities can be further improved or developed.

