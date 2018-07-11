// Type definitions for kbengine.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace KBEngine{
namespace Class{
	// KBEngine.Class.extend.!0
	
	/**
	 * 
	 */
	interface Extend0 {
				
		/**
		 * 
		 * @return  
		 */
		ctor(): boolean;
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		className : string;
				
		/**
		 * 
		 */
		velocity : number;
				
		/**
		 * enterworld之后设置为true
		 */
		inWorld : boolean;
				
		/**
		 * __init__调用之后设置为true
		 */
		inited : boolean;
				
		/**
		 * 是否被控制
		 */
		isControlled : boolean;
				
		/**
		 * 玩家是否在地面上
		 */
		isOnGround : boolean;
				
		/**
		 * 与服务端实体脚本中__init__类似, 代表初始化实体
		 */
		__init__(): void;
				
		/**
		 * 
		 */
		callPropertysSetMethods(): void;
				
		/**
		 * 
		 */
		onDestroy(): void;
				
		/**
		 * 
		 * @param bIsControlled 
		 */
		onControlled(bIsControlled : any): void;
				
		/**
		 * 
		 * @return  
		 */
		isPlayer(): boolean;
				
		/**
		 * 
		 */
		baseCall(): void;
				
		/**
		 * 
		 */
		cellCall(): void;
				
		/**
		 * 
		 */
		enterWorld(): void;
				
		/**
		 * 
		 */
		onEnterWorld(): void;
				
		/**
		 * 
		 */
		leaveWorld(): void;
				
		/**
		 * 
		 */
		onLeaveWorld(): void;
				
		/**
		 * 
		 */
		enterSpace(): void;
				
		/**
		 * 
		 */
		onEnterSpace(): void;
				
		/**
		 * 
		 */
		leaveSpace(): void;
				
		/**
		 * 
		 */
		onLeaveSpace(): void;
				
		/**
		 * 
		 * @param old 
		 */
		set_position(old : any): void;
				
		/**
		 * 
		 */
		onUpdateVolatileData(): void;
				
		/**
		 * 
		 * @param old 
		 */
		set_direction(old : any): void;
				
		/**
		 * 
		 */
		direction : /* KBEngine.entityServerPos */ any;
				
		/**
		 * 
		 */
		entityLastLocalPos : /* KBEngine.entityServerPos */ any;
				
		/**
		 * 
		 */
		entityLastLocalDir : /* KBEngine.entityServerPos */ any;
				
		/**
		 * 
		 */
		position : /* KBEngine.entityServerPos */ any;
	}
}
namespace Class{
	// KBEngine.Class.extend.!ret
	
	/**
	 * 
	 */
	interface ExtendRet {
				
		/**
		 * 
		 */
		new ();
	}
}

	// KBEngine.stringToUTF8Bytes.!ret
	type StringToUTF8BytesRet = Array<number>;


	// KBEngine.Message.!4
	type Message4 = Array<any>;


	// KBEngine.createFromStream.!ret
	
	/**
	 * 
	 */
	interface CreateFromStreamRet {
	}

	// KBEngine.player.!ret
	
	/**
	 * 
	 */
	interface PlayerRet {
				
		/**
		 * 
		 */
		isOnGround : boolean;
				
		/**
		 * 
		 */
		inited : boolean;
				
		/**
		 * 
		 */
		inWorld : boolean;
				
		/**
		 * 
		 */
		isControlled : boolean;
				
		/**
		 * 
		 */
		base : EntityCall;
				
		/**
		 * 
		 */
		cell : EntityCall;
	}

namespace Message{
	// KBEngine.Message.createFromStream.!ret
	type CreateFromStreamRet = Array<any>;
}
namespace DATATYPE_ARRAY{
	// KBEngine.DATATYPE_ARRAY.createFromStream.!ret
	type CreateFromStreamRet = /* [KBEngine.createFromStream.!ret */ any | /* KBEngine.DATATYPE_ARRAY.createFromStream.!ret] */ any;
}
namespace DATATYPE_ARRAY{
	// KBEngine.DATATYPE_ARRAY.parseDefaultValStr.!ret
	type ParseDefaultValStrRet = Array<any>;
}

/**
 * 
 */

		
	/**
	 * export
	 */
	interface Class {
				
		/**
		 * 
		 * @return  
		 */
		new (): Class;
	}

	
	/**
	 * 
	 */
	namespace Class{
				
		/**
		 * Create a new Class that inherits from this class
		 * @param props 
		 * @return  
		 */
		function extend(props : {} | Extend0): KBEngine.Class.ExtendRet;
	}
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												global
	 * -----------------------------------------------------------------------------------------
	 */
	export var PACKET_MAX_SIZE : number;
		
	/**
	 * 
	 */
	export var PACKET_MAX_SIZE_TCP : number;
		
	/**
	 * 
	 */
	export var PACKET_MAX_SIZE_UDP : number;
		
	/**
	 * 
	 */
	export var MESSAGE_ID_LENGTH : number;
		
	/**
	 * 
	 */
	export var MESSAGE_LENGTH_LENGTH : number;
		
	/**
	 * 
	 */
	export var CLIENT_NO_FLOAT : number;
		
	/**
	 * 
	 */
	export var KBE_FLT_MAX : number;
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												number64bits
	 * -----------------------------------------------------------------------------------------
	 */
	interface INT64 {
				
		/**
		 * 
		 * @param lo 
		 * @param hi 
		 * @return  
		 */
		new (lo : number, hi : number): INT64;
		/**
		 * 
		 */
		lo : number;
				
		/**
		 * 
		 */
		hi : number;
				
		/**
		 * 
		 */
		sign : number;
				
		/**
		 * 
		 * @return  
		 */
		 toString(): string;
	}

	interface INT64_Static{
    	/**
		 * 
		 * @param lo 
		 * @param hi 
		 * @return  
		 */
		new (lo : number, hi : number): INT64;
	}
	var INT64:INT64_Static
		
	/**
	 * 
	 */
	interface UINT64 {
				
		/**
		 * 
		 * @param lo 
		 * @param hi 
		 * @return  
		 */
		new (lo : number, hi : number): UINT64;

		/**
		 * 
		 */
		lo : number;
				
		/**
		 * 
		 */
		hi : number;

		/**
		 * 
		 * @return  
		 */
		 toString(): string;

	}
	interface UINT64_Static{
    	/**
		 * 
		 * @param lo 
		 * @param hi 
		 * @return  
		 */
		new (lo : number, hi : number): UINT64;
	}
	var UINT64:UINT64_Static
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												debug
	 * -----------------------------------------------------------------------------------------
	 */
	function INFO_MSG(s:string):void;
		
	function DEBUG_MSG(s:string):void;
	
	function ERROR_MSG(s:string):void;
		
	function WARNING_MSG(s:string):void;
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												string
	 * -----------------------------------------------------------------------------------------
	 * @param array 
	 * @return  
	 */
	function utf8ArrayToString(array : Uint8Array): string;
		
	/**
	 * 
	 * @param str 
	 * @return  
	 */
	function stringToUTF8Bytes(str : any): KBEngine.StringToUTF8BytesRet;
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												event
	 * -----------------------------------------------------------------------------------------
	 */
	interface EventInfo {
				
		/**
		 * 
		 * @param classinst 
		 * @param callbackfn 
		 * @return  
		 */
		new (classinst : KBEngineApp, callbackfn : any): EventInfo;
	}

		
	/**
	 * 
	 */
	export var classinst : KBEngineApp;
	
	interface Event{

		/**
		 * 
		 */
		_events:{};
		
		/**
		 * 
		 * @param evtName 
		 * @param classinst 
		 * @param strCallback 
		 */
		register(evtName : string, classinst : KBEngineApp, strCallback : string): void;
		
		/**
		 * 
		 * @param evtName 
		 * @param classinst 
		 */
		deregister(evtName : string, classinst : KBEngineApp): void;
		
		/**
		 * 
		 */
		fire(): void;
	}
	var Event;
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												memorystream
	 * -----------------------------------------------------------------------------------------
	 */
	interface MemoryStream {
				
		/**
		 * 
		 * @param size_or_buffer 
		 * @return  
		 */
		new (size_or_buffer : Uint8Array | number): MemoryStream;
	}

	
	/**
	 * 
	 */
	namespace MemoryStream{
				
		/**
		 * union PackFloatXType
		 * {
		 * 	float	fv;
		 * 	uint32	uv;
		 * 	int		iv;
		 * };
		 */
		interface PackFloatXType {
						
			/**
			 * 
			 * @return  
			 */
			new (): PackFloatXType;
		}

				
		/**
		 * 
		 */
		export var _unionData : ArrayBuffer;
				
		/**
		 * 
		 */
		export var rpos : number;
				
		/**
		 * 
		 */
		export var wpos : number;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @return  
		 */
		function readInt8(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readInt16(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readInt32(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readInt64(): INT64;
				
		/**
		 * 
		 * @return  
		 */
		function readUint8(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readUint16(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readUint32(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readUint64(): UINT64;
				
		/**
		 * 
		 * @return  
		 */
		function readFloat(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readDouble(): number;
				
		/**
		 * 
		 * @return  
		 */
		function readString(): string;
				
		/**
		 * 
		 * @return  
		 */
		function readBlob(): Float32Array;
				
		/**
		 * 
		 * @return  
		 */
		function readStream(): KBEngine.MemoryStream;
				
		/**
		 * 
		 * @return  
		 */
		function readPackXZ(): number;		
		/**
		 * 
		 */
		function readPackXZ();
				
		/**
		 * 
		 * @return  
		 */
		function readPackY(): number;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @param v 
		 */
		function writeInt8(v : number): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeInt16(v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeInt32(v : number): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeInt64(v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeUint8(v : number | boolean): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeUint16(v : number): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeUint32(v : number): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeUint64(v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeFloat(v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeDouble(v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeBlob(v : string): void;
				
		/**
		 * 
		 * @param v 
		 */
		function writeString(v : string): void;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @param v 
		 */
		function readSkip(v : any): void;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @return  
		 */
		function space(): number;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @return  
		 */
		function length(): number;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @return  
		 */
		function readEOF(): boolean;
				
		/**
		 * ---------------------------------------------------------------------------------
		 */
		function done(): void;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @param v 
		 * @return  
		 */
		function getbuffer(v : any): Float32Array;
	}
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												bundle
	 * -----------------------------------------------------------------------------------------
	 */
	interface Bundle {
				
		/**
		 * 
		 * @return  
		 */
		new (): Bundle;
	}

	
	/**
	 * 
	 */
	interface Bundle{
				
		/**
		 * 
		 */
		numMessage : number;
				
		/**
		 * 
		 */
		messageLength : number;
				
		/**
		 * ---------------------------------------------------------------------------------
		 * @param network 
		 */
		send(network : KBEngineApp): void;

		/**
		 * 
	 	*/
		memorystreams : Array<KBEngine.MemoryStream>;

		stream : KBEngine.MemoryStream;
		
		
		/**
		 * 
	 	*/
		messageLengthBuffer : Float32Array;

		
		/**
		 * 
	 	*/
		msgtype : Message;

			
	/**
	 * ---------------------------------------------------------------------------------
	 * @param msgtype 
	 */
		newMessage(msgtype : Message): void;
		
	/**
	 * ---------------------------------------------------------------------------------
	 * @param v 
	 */
		writeMsgLength(v : number): void;
		
	/**
	 * ---------------------------------------------------------------------------------
	 * @param issend 
	 */
	fini(issend : boolean): void;
		
	/**
	 * 
	 * @param msg 
	 */
	send(msg : Float32Array): void;
		
	/**
	 * ---------------------------------------------------------------------------------
	 * @param v 
	 */
	checkStream(v : number): void;
		
	/**
	 * ---------------------------------------------------------------------------------
	 * @param v 
	 */
	writeInt8(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeInt16(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeInt32(v : number): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeInt64(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeUint8(v : boolean): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeUint16(v : number): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeUint32(v : number): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeUint64(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeFloat(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeDouble(v : any): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeString(v : string): void;
		
	/**
	 * 
	 * @param v 
	 */
	writeBlob(v : string): void;
	

	}
	var Bundle;	
	
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												messages
	 * -----------------------------------------------------------------------------------------
	 */
	
	/**
	 * 
	 */
	var datatype2id : {
				
		/**
		 * 
		 */
		STRING :number;
				
		/**
		 * 
		 */
		"STD::STRING" : number;
				
		/**
		 * 
		 */
		UINT8 : number;
				
		/**
		 * 
		 */
		BOOL : number;
				
		/**
		 * 
		 */
		DATATYPE : number;
				
		/**
		 * 
		 */
		CHAR : number;
				
		/**
		 * 
		 */
		DETAIL_TYPE : number;
				
		/**
		 * 
		 */
		ENTITYCALL_CALL_TYPE : number;
				
		/**
		 * 
		 */
		UINT16 : number;
				
		/**
		 * 
		 */
		"UNSIGNED SHORT" : number;
				
		/**
		 * 
		 */
		SERVER_ERROR_CODE : number;
				
		/**
		 * 
		 */
		ENTITY_TYPE : number;
				
		/**
		 * 
		 */
		ENTITY_PROPERTY_UID : number;
				
		/**
		 * 
		 */
		ENTITY_METHOD_UID : number;
				
		/**
		 * 
		 */
		ENTITY_SCRIPT_UID : number;
				
		/**
		 * 
		 */
		DATATYPE_UID : number;
				
		/**
		 * 
		 */
		UINT32 : number;
				
		/**
		 * 
		 */
		UINT : number;
				
		/**
		 * 
		 */
		"UNSIGNED INT" : number;
				
		/**
		 * 
		 */
		ARRAYSIZE : number;
				
		/**
		 * 
		 */
		SPACE_ID : number;
				
		/**
		 * 
		 */
		GAME_TIME : number;
				
		/**
		 * 
		 */
		TIMER_ID : number;
				
		/**
		 * 
		 */
		UINT64 : number;
				
		/**
		 * 
		 */
		DBID : number;
				
		/**
		 * 
		 */
		COMPONENT_ID : number;
				
		/**
		 * 
		 */
		INT8 : number;
				
		/**
		 * 
		 */
		COMPONENT_ORDER : number;
				
		/**
		 * 
		 */
		INT16 : number;
				
		/**
		 * 
		 */
		SHORT : number;
				
		/**
		 * 
		 */
		INT32 : number;
				
		/**
		 * 
		 */
		INT : number;
				
		/**
		 * 
		 */
		ENTITY_ID : number;
				
		/**
		 * 
		 */
		CALLBACK_ID : number;
				
		/**
		 * 
		 */
		COMPONENT_TYPE : number;
				
		/**
		 * 
		 */
		INT64 : number;
				
		/**
		 * 
		 */
		PYTHON : number;
				
		/**
		 * 
		 */
		PY_DICT : number;
				
		/**
		 * 
		 */
		PY_TUPLE : number;
				
		/**
		 * 
		 */
		PY_LIST : number;
				
		/**
		 * 
		 */
		ENTITYCALL : number;
				
		/**
		 * 
		 */
		BLOB : number;
				
		/**
		 * 
		 */
		UNICODE : number;
				
		/**
		 * 
		 */
		FLOAT : number;
				
		/**
		 * 
		 */
		DOUBLE : number;
				
		/**
		 * 
		 */
		VECTOR2 : number;
				
		/**
		 * 
		 */
		VECTOR3 : number;
				
		/**
		 * 
		 */
		VECTOR4 : number;
				
		/**
		 * 
		 */
		FIXED_DICT : number;
				
		/**
		 * 
		 */
		ARRAY : number;
	}
		
	/**
	 * 
	 * @param writer 
	 * @param argType 
	 */
	function mappingDataType(writer : any, argType : any): void;
		
	/**
	 * 
	 * @param writer 
	 * @param argType 
	 * @return  
	 */
	function bindwriter(writer : any, argType : any):  /* error */ any;
		
	/**
	 * 
	 * @param argType 
	 * @return  
	 */
	function bindReader(argType : any): any;
		
	/**
	 * 
	 */
	interface Message {
				
		/**
		 * 
		 * @param id 
		 * @param name 
		 * @param length 
		 * @param argstype 
		 * @param args 
		 * @param handler 
		 * @return  
		 */
		new (id : number, name : string, length : number, argstype : number, args : KBEngine.Message4, handler : any): Message;
	}

	
	/**
	 * 
	 */
	interface Message{
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		length : number;
				
		/**
		 * 
		 */
		argsType : number;
				
		/**
		 * 
		 * @param msgstream 
		 * @return  
		 */
		createFromStream(msgstream : KBEngine.MemoryStream): KBEngine.Message.CreateFromStreamRet;

		/**
	 	* 
	 	* @param msgstream 
	 	*/
		handleMessage(msgstream : KBEngine.MemoryStream): void;
	}	
	var Message :{
	};
	
	/**
	 * 上行消息
	 */
	var messages : {
				
		/**
		 * 
		 */
		Loginapp_importClientMessages : Message;
				
		/**
		 * 
		 */
		Baseapp_importClientMessages : Message;
				
		/**
		 * 
		 */
		Baseapp_importClientEntityDef : Message;
				
		/**
		 * 
		 */
		onImportClientMessages : Message;
	}
	
	/**
	 * 
	 */
	var clientmessages : {
	}
	
	/**
	 * 
	 */
	var bufferedCreateEntityMessages : {
	}
	
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												math
	 * -----------------------------------------------------------------------------------------
	 */
	interface Vector3 {
				
		/**
		 * 
		 */
		new ();
	}
		
	/**
	 * 
	 * @param value 
	 * @param min_inclusive 
	 * @param max_inclusive 
	 * @return  
	 */
	function clampf(value : any, min_inclusive : number, max_inclusive : number): any;
		
	/**
	 * 
	 * @param angle 
	 * @param half 
	 * @return  
	 */
	function int82angle(angle : number, half : boolean): number;
		
	/**
	 * 
	 * @param v 
	 * @param half 
	 * @return  
	 */
	function angle2int8(v : any, half : any): number;
	
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												entity
	 * -----------------------------------------------------------------------------------------
	 */
	interface Entity {
				
		/**
		 * 
		 */
		new ();
	}
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												EntityCall
	 * -----------------------------------------------------------------------------------------
	 */
	export var ENTITYCALL_TYPE_CELL : number;
		
	/**
	 * 
	 */
	export var ENTITYCALL_TYPE_BASE : number;
		
	/**
	 * 
	 */
	interface EntityCall {
				
		/**
		 * 
		 * @return  
		 */
		new (): EntityCall;

		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		className : string;
				
		/**
		 * 
		 */
		type : number;

		/**
	 	* 
	 	*/
		bundle : KBEngine.Bundle;

		/**
	 	* 
		 * @return  
		 */
		isBase(): boolean;
		
		/**
		 * 
		 * @return  
		 */
		isCell(): boolean;
		
		/**
		 * 
		 * @return  
		 */
		newCall(): /* !this.bundle */ any;

		/**
		 * 
		 * @param bundle 
		 */
		sendCall(bundle : KBEngine.Bundle): void;
	}
		
	
	
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												entitydef
	 * -----------------------------------------------------------------------------------------
	 */
	interface moduledefs{
	}
	
	/**
	 * 
	 */
	var datatypes : {
				
		/**
		 * 
		 */
		UINT8 : DATATYPE_UINT8;
				
		/**
		 * 
		 */
		UINT16 : DATATYPE_UINT16;
				
		/**
		 * 
		 */
		UINT32 : DATATYPE_UINT32;
				
		/**
		 * 
		 */
		UINT64 : DATATYPE_UINT64;
				
		/**
		 * 
		 */
		INT8 : DATATYPE_INT8;
				
		/**
		 * 
		 */
		INT16 : DATATYPE_INT16;
				
		/**
		 * 
		 */
		INT32 : DATATYPE_INT32;
				
		/**
		 * 
		 */
		INT64 : DATATYPE_INT64;
				
		/**
		 * 
		 */
		FLOAT : DATATYPE_FLOAT;
				
		/**
		 * 
		 */
		DOUBLE : DATATYPE_DOUBLE;
				
		/**
		 * 
		 */
		STRING : DATATYPE_STRING;
				
		/**
		 * 
		 */
		VECTOR2 : DATATYPE_VECTOR2;
				
		/**
		 * 
		 */
		VECTOR3 : DATATYPE_VECTOR3;
				
		/**
		 * 
		 */
		VECTOR4 : DATATYPE_VECTOR4;
				
		/**
		 * 
		 */
		PYTHON : DATATYPE_PYTHON;
				
		/**
		 * 
		 */
		UNICODE : DATATYPE_UNICODE;
				
		/**
		 * 
		 */
		ENTITYCALL : DATATYPE_ENTITYCALL;
				
		/**
		 * 
		 */
		BLOB : DATATYPE_BLOB;
	}
		
	/**
	 * 
	 */
	interface DATATYPE_UINT8 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_UINT8;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;

	}
	var DATATYPE_UINT8;

	/**
	 * 
	 */
	interface DATATYPE_UINT16 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_UINT16;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}
		
	/**
	 * 
	 */
	interface DATATYPE_UINT32 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_UINT32;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_UINT64 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_UINT64;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): KBEngine.UINT64;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_INT8 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_INT8;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_INT16 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_INT16;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_INT32 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_INT32;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_INT64 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_INT64;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): KBEngine.INT64;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_FLOAT {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_FLOAT;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_DOUBLE {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_DOUBLE;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): number;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_STRING {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_STRING;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): string;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): any;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_VECTOR2 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_VECTOR2;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 */
		createFromStream(stream : KBEngine.MemoryStream): void;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		parseDefaultValStr(v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_VECTOR3 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_VECTOR3;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): any;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): any;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}
		
	/**
	 * 
	 */
	interface DATATYPE_VECTOR4 {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_VECTOR4;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 */
		createFromStream(stream : KBEngine.MemoryStream): void;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		parseDefaultValStr(v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}
	
	/**
	 * 
	 */
	interface DATATYPE_PYTHON {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_PYTHON;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 */
		createFromStream(stream : KBEngine.MemoryStream): void;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): Float32Array;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_UNICODE {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_UNICODE;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): string;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): any;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_ENTITYCALL {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_ENTITYCALL;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 */
		createFromStream(stream : KBEngine.MemoryStream): void;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): Float32Array;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_BLOB {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_BLOB;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): Float32Array;
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : any): Float32Array;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_ARRAY {
				
		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_ARRAY;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): KBEngine.DATATYPE_ARRAY.CreateFromStreamRet;		
		/**
		 * 
		 */
		createFromStream();
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : {} | Array<any>): KBEngine.DATATYPE_ARRAY.ParseDefaultValStrRet;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

		
	/**
	 * 
	 */
	interface DATATYPE_FIXED_DICT {

		dicttype : {}

		implementedBy:string

		/**
		 * 
		 * @return  
		 */
		new (): DATATYPE_FIXED_DICT;

		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 * @param stream 
		 * @return  
		 */
		createFromStream(stream : KBEngine.MemoryStream): KBEngine.DATATYPE_ARRAY.CreateFromStreamRet;		
		/**
		 * 
		 */
		createFromStream();
				
		/**
		 * 
		 * @param stream 
		 * @param v 
		 */
		addToStream(stream : any, v : any): void;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		parseDefaultValStr(v : {} | Array<any>): KBEngine.DATATYPE_ARRAY.ParseDefaultValStrRet;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		isSameType(v : any): boolean;
	}

	
	
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												KBEngine args
	 * -----------------------------------------------------------------------------------------
	 */
	interface KBEngineArgs {
				
		/**
		 * 
		 * @return  
		 */
		new (): KBEngineArgs;
		/**
	 * 
	 */
	ip : string;
		
	/**
	 * 
	 */
	port : number;
		
	/**
	 * 
	 */
	updateHZ : number;
		
	/**
	 * 
	 */
	serverHeartbeatTick : number;
		
	/**
	 * 
	 */
	clientType : number;
		
	/**
	 * 在Entity初始化时是否触发属性的set_*事件(callPropertysSetMethods)
	 */
	isOnInitCallPropertysSetMethods : boolean;
	}

	interface KBEngineArgs_Static{
    	new (): KBEngineArgs
	}
	var KBEngineArgs:KBEngineArgs_Static
	
		
	/**
	 * 描述服务端返回的错误信息
	 */
	interface ServerErr {
				
		/**
		 * 
		 * @return  
		 */
		new (): ServerErr;

		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		descr : string;
				
		/**
		 * 
		 */
		id : number;

	}
	interface ServerErr_Static{
    	new (): KBEngineArgs
	}
	var ServerErr:ServerErr_Static

		
	/**
	 * 
	 */
	export var descr : string;
		
	/**
	 * -----------------------------------------------------------------------------------------
	 * 												KBEngine app
	 * -----------------------------------------------------------------------------------------
	 */
	interface KBEngineApp {
				
		/**
		 * 
		 * @param kbengineArgs 
		 * @return  
		 */
		new (kbengineArgs : any): KBEngineApp;
	}

	
	/**
	 * 
	 */
	interface KBEngineApp{
				
		/**
		 * 
		 */
		username : string;
				
		/**
		 * 
		 */
		password : string;
				
		/**
		 * 
		 */
		clientdatas : string;
				
		/**
		 * 
		 */
		encryptedKey : string;
				
		/**
		 * 
		 */
		loginappMessageImported : boolean;
				
		/**
		 * 
		 */
		baseappMessageImported : boolean;
				
		/**
		 * 
		 */
		serverErrorsDescrImported : boolean;
				
		/**
		 * 
		 */
		entitydefImported : boolean;
				
		/**
		 * 服务端分配的baseapp地址
		 */
		baseappIP : string;
				
		/**
		 * 
		 */
		baseappPort : number;
				
		/**
		 * 
		 */
		currserver : string;
				
		/**
		 * 
		 */
		currstate : string;
				
		/**
		 * 扩展数据
		 */
		serverdatas : string;
				
		/**
		 * 版本信息
		 */
		serverVersion : string;
				
		/**
		 * 
		 */
		serverScriptVersion : string;
				
		/**
		 * 
		 */
		serverProtocolMD5 : string;
				
		/**
		 * 
		 */
		serverEntityDefMD5 : string;
				
		/**
		 * 
		 */
		clientVersion : string;
				
		/**
		 * 
		 */
		clientScriptVersion : string;
				
		/**
		 * 
		 */
		entity_id : number;
				
		/**
		 * 
		 */
		entity_type : string;
				
		/**
		 * 这个参数的选择必须与kbengine_defs.xml::cellapp/aliasEntityID的参数保持一致
		 */
		useAliasEntityID : boolean;
				
		/**
		 * 
		 */
		spaceID : number;
				
		/**
		 * 
		 */
		spaceResPath : string;
				
		/**
		 * 
		 */
		isLoadedGeometry : boolean;
				
		/**
		 * 
		 */
		lastTickTime : number;
				
		/**
		 * 
		 */
		lastTickCBTime : number;
				
		/**
		 * 当前组件类别， 配套服务端体系
		 */
		component : string;

		serverErrs : {}

	}
	
	/**
	 * 
	 */
	interface KBEngineApp{ 	
	/**
	 * 
	 */
	 resetSocket(): void;
		
	/**
	 * 
	 */
	 reset(): void;
		
	/**
	 * 
	 */
	 installEvents(): void;
		
	/**
	 * 
	 */
	 uninstallEvents(): void;
		
	/**
	 * 
	 */
	 hello(): void;
		
	/**
	 * 
	 * @return  
	 */
	 player(): KBEngine.PlayerRet;
		
	/**
	 * 
	 * @param entityID 
	 * @return  
	 */
	 findEntity(entityID : any): any;
		
	/**
	 * 
	 * @param addr 
	 */
	 connect(addr : string): void;
		
	/**
	 * 
	 */
	 disconnect(): void;
		
	/**
	 * 
	 */
	 onopen(): void;
		
	/**
	 * 
	 * @param evt 
	 */
	 onerror_before_onopen(evt : any): void;
		
	/**
	 * 
	 * @param evt 
	 */
	 onerror_after_onopen(evt : any): void;
		
	/**
	 * 
	 * @param msg 
	 */
	 onmessage(msg : any): void;
		
	/**
	 * 
	 */
	 onclose(): void;
		
	/**
	 * 
	 */
	 close(): void;
		
	/**
	 * 
	 */
	 update(): void;
	}

	interface KBEngineApp{
	/**
	 * 服务器心跳回调
	 */
	Client_onAppActiveTickCB():void;

		
	/**
	 * 通过错误id得到错误描述
	 * @param id 
	 * @return  
	 */
	serverErr(id : any): string;
		
	/**
	 * 服务端错误描述导入了
	 */
	Client_onImportServerErrorsDescr (stream : any):void;

		
	/**
	 * 
	 */
	onOpenLoginapp_login(): void;
		
	/**
	 * 
	 */
	onOpenLoginapp_createAccount(): void;
		
	/**
	 * 
	 */
	onImportClientMessagesCompleted(): void;
		
	/**
	 * 
	 * @param stream 
	 * @param canprint 
	 */
	createDataTypeFromStreams(stream : any, canprint : boolean): void;
		
	/**
	 * 
	 * @param stream 
	 * @param canprint 
	 */
	createDataTypeFromStream(stream : any, canprint : boolean): void;
		
	/**
	 * 
	 */
	Client_onImportClientEntityDef(stream : any): void;

		
	/**
	 * 
	 */
	Client_onVersionNotMatch (stream : any): void;

		
	/**
	 * 
	 */
	Client_onScriptVersionNotMatch (stream : any) : void;

		
	/**
	 * 
	 */
	onImportEntityDefCompleted(): void;
		
	/**
	 * 
	 */
	Client_onImportClientMessages(msg : any):void;

		
	/**
	 * 
	 * @param username 
	 * @param password 
	 * @param datas 
	 */
	createAccount(username : any, password : any, datas : any): void;
		
	/**
	 * 
	 * @param noconnect 
	 */
	createAccount_loginapp(noconnect : boolean): void;
		
	/**
	 * 
	 * @param emailAddress 
	 */
	bindAccountEmail(emailAddress : any): void;
		
	/**
	 * 
	 * @param old_password 
	 * @param new_password 
	 */
	newPassword(old_password : any, new_password : any): void;
		
	/**
	 * 
	 * @param username 
	 * @param password 
	 * @param datas 
	 */
	login(username : any, password : any, datas : any): void;
		
	/**
	 * 
	 * @param noconnect 
	 */
	login_loginapp(noconnect : boolean): void;
		
	/**
	 * 
	 */
	onOpenLoginapp_resetpassword(): void;
		
	/**
	 * 
	 * @param username 
	 */
	reset_password(username : any): void;
		
	/**
	 * 
	 * @param noconnect 
	 */
	resetpassword_loginapp(noconnect : boolean): void;
		
	/**
	 * 
	 */
	onOpenBaseapp(): void;
		
	/**
	 * 
	 * @param noconnect 
	 */
	login_baseapp(noconnect : boolean): void;
		
	/**
	 * 
	 */
	reloginBaseapp(): void;
		
	/**
	 * 
	 */
	onReOpenBaseapp(): void;
		
	/**
	 * 
	 */
	Client_onHelloCB(args : any): void;

		
	/**
	 * 
	 */
	Client_onLoginFailed (args : any) : void;

		
	/**
	 * 
	 */
	Client_onLoginSuccessfully (args : any): void;

		
	/**
	 * 
	 */
	Client_onLoginBaseappFailed (failedcode : any): void;

		
	/**
	 * 
	 */
	Client_onReloginBaseappFailed(failedcode : any):void;

		
	/**
	 * 
	 */
	Client_onReloginBaseappSuccessfully (stream : any): void

		
	/**
	 * 
	 */
	 entityclass : /*no type*/{};
		
	/**
	 * 
	 * @param entityType 
	 */
	getentityclass(entityType : any): void;
		
	/**
	 * 
	 */
	Client_onCreatedProxies(rndUUID : any, eid : any, entityType : any):void

		
	/**
	 * 
	 * @param stream 
	 * @return  
	 */
	getViewEntityIDFromStream(stream : any): number;
		
	/**
	 * 
	 * @param eid 
	 * @param stream 
	 */
	onUpdatePropertys_(eid : number, stream : KBEngine.MemoryStream): void;
		
	/**
	 * 
	 */
	Client_onUpdatePropertysOptimized  (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdatePropertys(stream : KBEngine.MemoryStream):void;

		
	/**
	 * 
	 * @param eid 
	 * @param stream 
	 */
	onRemoteMethodCall_(eid : number, stream : any): void;
		
	/**
	 * 
	 */
	Client_onRemoteMethodCallOptimized (stream : any): void;

		
	/**
	 * 
	 */
	Client_onRemoteMethodCall  (stream : any):void;

		
	/**
	 * 
	 */
	Client_onEntityEnterWorld(stream : any): void;

		
	/**
	 * 
	 */
	Client_onEntityLeaveWorldOptimized(stream : any):void;

		
	/**
	 * 
	 */
	Client_onEntityLeaveWorld (eid : number):void;

		
	/**
	 * 
	 */
	Client_onEntityDestroyed(eid : any):void;

		
	/**
	 * 
	 */
	Client_onEntityEnterSpace (stream : any):void;

		
	/**
	 * 
	 */
	Client_onEntityLeaveSpace (eid : any):void;

		
	/**
	 * 
	 */
	Client_onKicked (failedcode : any): void;

		
	/**
	 * 
	 */
	Client_onCreateAccountResult(stream : any):void;

		
	/**
	 * 
	 */
	Client_onControlEntity (eid : any, isControlled : any):void;

		
	/**
	 * 
	 */
	updatePlayerToServer(): void;
		
	/**
	 * 
	 * @param spaceID 
	 * @param respath 
	 */
	addSpaceGeometryMapping(spaceID : number, respath : any): void;
		
	/**
	 * 
	 * @param isAll 
	 */
	clearSpace(isAll : boolean): void;
		
	/**
	 * 
	 * @param isAll 
	 */
	clearEntities(isAll : boolean): void;
		
	/**
	 * 
	 */
	Client_initSpaceData (stream : any): void;

		
	/**
	 * 
	 */
	Client_setSpaceData (spaceID : number, key : any, value : any): void;

		
	/**
	 * 
	 */
	Client_delSpaceData (spaceID : any, key : any):void;

		
	/**
	 * 
	 */
	Client_getSpaceData (spaceID : any, key : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateBasePos (x : any, y : any, z : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateBasePosXZ  (x : any, z : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData (stream : any): void;

		
	/**
	 * 
	 */
	Client_onSetEntityPosAndDir (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_ypr (stream : any): void;

		
	/**
	 * 
	 */
	Client_onUpdateData_yp (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_yr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_pr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_y  (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_p (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_r (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_ypr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_yp (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_yr(stream : any): void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_pr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_y (stream : any): void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_p (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xz_r (stream : any): void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz (stream : any): void

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_ypr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_yp (stream : any):void;

		
	/**
	 * 
	 */
	 Client_onUpdateData_xyz_yr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_pr (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_y (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_p (stream : any):void;

		
	/**
	 * 
	 */
	Client_onUpdateData_xyz_r (stream : any):void;

		
	/**
	 * 
	 * @param entityID 
	 * @param x 
	 * @param y 
	 * @param z 
	 * @param yaw 
	 * @param pitch 
	 * @param roll 
	 * @param isOnGround 
	 */
	_updateVolatileData(entityID : number, x : number, y : number, z : number, yaw : number, pitch : number, roll : number, isOnGround : number): void;
		
	/**
	 * 
	 */
	Client_onStreamDataStarted (id : any, datasize : any, descr : any):void;

		
	/**
	 * 
	 */
	Client_onStreamDataRecv (stream : any):void;

		
	/**
	 * 
	 */
	Client_onStreamDataCompleted (id : any):void;

		
	/**
	 * 
	 */
	Client_onReqAccountResetPasswordCB (failedcode : any): void;

		
	/**
	 * 
	 */
	Client_onReqAccountBindEmailCB (failedcode : any):void;

		
	/**
	 * 
	 */
	Client_onReqAccountNewPasswordCB (failedcode : any):void;

		
	/**
	 * 
	 */
	currserver : string;
		
	/**
	 * 
	 */
	currstate : string;
		
	/**
	 * 
	 */
	serverdatas : string;
		
	/**
	 * 
	 */
	serverVersion : string;
		
	/**
	 * 
	 */
	serverScriptVersion : string;
		
	/**
	 * 
	 */
	serverProtocolMD5 : string;
		
	/**
	 * 
	 */
	serverEntityDefMD5 : string;
		
	/**
	 * 
	 */
	clientVersion : string;
		
	/**
	 * 
	 */
	clientScriptVersion : string;
		
	/**
	 * 
	 */
	entity_id : number;
		
	/**
	 * 
	 */
	entity_type : string;
		
	/**
	 * 
	 */
	useAliasEntityID : boolean;
	
	/**
	 * 当前玩家最后一次同步到服务端的位置与朝向与服务端最后一次同步过来的位置
	 */
	entityServerPos : Vector3;
	
	/**
	 * 客户端所有的实体
	 */
	entities: {}
		
	/**
	 * 安全起见， 这里清空一下
	 * 如果服务端上使用giveClientTo切换控制权
	 * 之前的实体已经进入世界， 切换后的实体也进入世界， 这里可能会残留之前那个实体进入世界的信息
	 */
	entityIDAliasIDList : Array<any>;
		
	/**
	 * 
	 */
	controlledEntities : /* [? */ any | /* ?] */ any;
	
	/**
	 * 空间的信息
	 */
	spacedata : {}
	}
	/**
	 * 
	 * @param kbengineArgs 
	 */
	function create(kbengineArgs : any): void;
		
	/**
	 * 
	 */
	function destroy(): void;
		
	/**
	 * 
	 */
	export var reader : KBEngine.MemoryStream;
		
	/**
	 * 
	 */
	export 
		
	/**
	 * 
	 */
	var app : KBEngine.KBEngineApp;
	var networkInterface : KBEngine.KBEngineApp;

/**
 * 
 */
export var posHasChanged : boolean;

/**
 * 
 */
export var dirHasChanged : boolean;

/**
 * 
 */
namespace js{
	
	/**
	 * 
	 */
	interface Float32Array {
	}
}
}