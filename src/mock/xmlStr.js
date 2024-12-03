export const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/modeler" exporter="Flowable Open Source Modeler" exporterVersion="1.1.2-SNAPSHOT">
  <process id="svn_application_form" name="SVN申请流程表" isExecutable="true">
    <startEvent id="startEvent1"></startEvent>
    <userTask id="Activity_0eofm22" name="提交人" flowable:candidateGroups="测试用角色" flowable:skipExpression="">
      <extensionElements>
        <flowable:assigneeType><![CDATA[idm]]></flowable:assigneeType>
        <flowable:idmCandidateGroups><![CDATA[[{"id":"undefined_60070","name":"测试用角色","sn":"测试用角色"}]]]></flowable:idmCandidateGroups>
        <flowable:isEditdata><![CDATA[true]]></flowable:isEditdata>
        <flowable:nodeType><![CDATA[0]]></flowable:nodeType>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_042g57v" sourceRef="startEvent1" targetRef="Activity_0eofm22"></sequenceFlow>
    <userTask id="Activity_0ud0he0" name="主管审核">
      <extensionElements>
        <flowable:taskListener event="create" delegateExpression=""></flowable:taskListener>
        <flowable:taskListener event="create" delegateExpression=""></flowable:taskListener>
        <flowable:assigneeType><![CDATA[idm]]></flowable:assigneeType>
        <flowable:isEditdata><![CDATA[true]]></flowable:isEditdata>
        <flowable:nodeType><![CDATA[1]]></flowable:nodeType>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_10ltfzt" sourceRef="Activity_0eofm22" targetRef="Activity_0ud0he0"></sequenceFlow>
    <userTask id="Activity_0xhe8nm" name="经理审核" flowable:candidateUsers="JH70003">
      <extensionElements>
        <flowable:taskListener event="create" delegateExpression=""></flowable:taskListener>
        <flowable:taskListener event="complete" delegateExpression=""></flowable:taskListener>
        <flowable:assigneeType><![CDATA[idm]]></flowable:assigneeType>
        <flowable:idmCandidateUsers><![CDATA[[{"id":"1147160053359714304","name":"SVN审核经理","code":"JH70003","sex":0,"mobile":"13311112222","companyId":null,"companyName":null,"deptId":null,"deptName":null}]]]></flowable:idmCandidateUsers>
        <flowable:nodeType><![CDATA[1]]></flowable:nodeType>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_1k7t103" sourceRef="Activity_0ud0he0" targetRef="Activity_0xhe8nm"></sequenceFlow>
    <userTask id="Activity_1nim4j5" name="知会对接人" flowable:candidateUsers="JH70004">
      <extensionElements>
        <flowable:taskListener event="create" delegateExpression=""></flowable:taskListener>
        <flowable:assigneeType><![CDATA[idm]]></flowable:assigneeType>
        <flowable:idmCandidateUsers><![CDATA[[{"id":"1147160212286087168","name":"SVN知会对接人","code":"JH70004","sex":0,"mobile":"13312312333","companyId":null,"companyName":null,"deptId":null,"deptName":null}]]]></flowable:idmCandidateUsers>
        <flowable:nodeType><![CDATA[4]]></flowable:nodeType>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_0y1ezwh" sourceRef="Activity_0xhe8nm" targetRef="Activity_1nim4j5"></sequenceFlow>
    <endEvent id="Event_1l2ddd0"></endEvent>
    <sequenceFlow id="Flow_11rjv3u" sourceRef="Activity_1nim4j5" targetRef="Event_1l2ddd0"></sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_svn_application_form">
    <bpmndi:BPMNPlane bpmnElement="svn_application_form" id="BPMNPlane_svn_application_form">
      <bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
        <omgdc:Bounds height="30.0" width="30.0" x="100.0" y="163.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="Activity_0eofm22" id="BPMNShape_Activity_0eofm22">
        <omgdc:Bounds height="80.0" width="100.0" x="180.0" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="Activity_0ud0he0" id="BPMNShape_Activity_0ud0he0">
        <omgdc:Bounds height="80.0" width="100.0" x="330.0" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="Activity_0xhe8nm" id="BPMNShape_Activity_0xhe8nm">
        <omgdc:Bounds height="80.0" width="100.0" x="480.0" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="Activity_1nim4j5" id="BPMNShape_Activity_1nim4j5">
        <omgdc:Bounds height="80.0" width="100.0" x="630.0" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="Event_1l2ddd0" id="BPMNShape_Event_1l2ddd0">
        <omgdc:Bounds height="36.0" width="36.0" x="782.0" y="160.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="Flow_10ltfzt" id="BPMNEdge_Flow_10ltfzt" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="279.0" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="329.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="Flow_0y1ezwh" id="BPMNEdge_Flow_0y1ezwh" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="579.0" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="629.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="Flow_11rjv3u" id="BPMNEdge_Flow_11rjv3u" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="18.0" flowable:targetDockerY="18.0">
        <omgdi:waypoint x="729.0" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="782.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="Flow_1k7t103" id="BPMNEdge_Flow_1k7t103" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="429.0" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="479.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="Flow_042g57v" id="BPMNEdge_Flow_042g57v" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="129.0" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="180.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`;
