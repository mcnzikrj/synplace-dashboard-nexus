
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Package, Truck, CheckCircle, Clock } from "lucide-react";

// Dados simulados de pedidos
const orders = [
  {
    id: "#ML-2024-001",
    customer: "João Silva",
    product: "Smartphone Samsung Galaxy A54",
    marketplace: "Mercado Livre",
    status: "pendente",
    value: "R$ 1.299,00",
    date: "15/01/2024",
    color: "#FFE600"
  },
  {
    id: "#SP-2024-002",
    customer: "Maria Santos",
    product: "Tênis Nike Air Max",
    marketplace: "Shopee",
    status: "enviado",
    value: "R$ 459,90",
    date: "14/01/2024",
    color: "#EE4D2D"
  },
  {
    id: "#ML-2024-003",
    customer: "Pedro Costa",
    product: "Notebook Dell Inspiron",
    marketplace: "Mercado Livre",
    status: "entregue",
    value: "R$ 2.899,00",
    date: "13/01/2024",
    color: "#FFE600"
  },
  {
    id: "#SP-2024-004",
    customer: "Ana Oliveira",
    product: "Fone de Ouvido JBL",
    marketplace: "Shopee",
    status: "processando",
    value: "R$ 199,99",
    date: "12/01/2024",
    color: "#EE4D2D"
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pendente':
      return <Clock className="h-4 w-4" />;
    case 'processando':
      return <Package className="h-4 w-4" />;
    case 'enviado':
      return <Truck className="h-4 w-4" />;
    case 'entregue':
      return <CheckCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    case 'processando':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'enviado':
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    case 'entregue':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'Pendente';
    case 'processando':
      return 'Processando';
    case 'enviado':
      return 'Enviado';
    case 'entregue':
      return 'Entregue';
    default:
      return 'Pendente';
  }
};

export default function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pedidos</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie e acompanhe pedidos de todas as suas lojas conectadas.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pedidos, clientes ou produtos..."
                className="pl-10 bg-background border-border"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-background border-border">
                <SelectValue placeholder="Todos os Marketplaces" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Marketplaces</SelectItem>
                <SelectItem value="mercadolivre">Mercado Livre</SelectItem>
                <SelectItem value="shopee">Shopee</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[140px] bg-background border-border">
                <SelectValue placeholder="Todos os Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="processando">Processando</SelectItem>
                <SelectItem value="enviado">Enviado</SelectItem>
                <SelectItem value="entregue">Entregue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="border-border">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Pedidos */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Pedidos Recentes</CardTitle>
          <CardDescription>
            {orders.length} pedidos encontrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: order.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium text-foreground">
                        {order.id}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {order.marketplace}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {order.product}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Cliente: {order.customer} • {order.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">
                      {order.value}
                    </p>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(order.status)} flex items-center gap-1`}
                  >
                    {getStatusIcon(order.status)}
                    {getStatusLabel(order.status)}
                  </Badge>

                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
