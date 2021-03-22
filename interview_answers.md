# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component is a component where the inputs are controlled and tracked through memory. This is mainly for text values and booleans. Whereas, a functional component can make use of stateful logic. In its use of stateful logic, it may not be as refined or DRY. More repeated code is prevelant. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
ComponentWillMount is in the Mounting phase. Whereas, the ComponentWillUpdate is in the growth/updating phase. In between the comparison of the Virtual DOM and the actual DOM is when the ComponentWillUpdate is called. 

3. Define stateful logic.
Stateful Logic is the handling of multiple controlled inputs, functions, or user events through state. 

4. What are the three step of creating a successful test? What is done in each phase?
Arrange: Steps to set up the case
Act : Interaction with the webpage or query
Assert:  Expected outcome stated