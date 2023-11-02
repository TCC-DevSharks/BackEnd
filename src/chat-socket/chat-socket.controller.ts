import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors:{origin: '*', credentials: true}})
  export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server: Server;
    private onlineUsers = new Map();
      
    afterInit(server: Server) {
      console.log('Socket.io server initialized');
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Client connected: ${client.id}`);
      this.onlineUsers.set(client.id, client);
      
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
      this.onlineUsers.delete(client.id);
    }
  
    @SubscribeMessage('add-user')
    handleAddUser(client: Socket, userId: string): void {

      this.onlineUsers.set(userId, client.id);
      console.log("usuario:"+ userId);
    }
  
    @SubscribeMessage('send-msg')
    handleSendMessage(client: Socket, data: { to: string, msg: string }): void {
      console.log( data);

      const sendUserSocketId = this.onlineUsers.get(data.to);
      console.log("user:" + sendUserSocketId);
      
      if (sendUserSocketId) {
      console.log("send-msg");
        client.to(sendUserSocketId).emit('msg-receive', data.msg);
      }
    }
  }
  


  
  