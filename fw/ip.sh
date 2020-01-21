
# yum -y install iptables-services
# systemctl enable iptables.service
# systemctl start iptables

# systemctl restart iptables

# systemctl status iptables

# flush, add, protect, list

# http://www.adminsehow.com/2009/08/how-to-clear-all-iptables-rules

iptables -F
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT

# local
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# open
iptables -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT

iptables -A INPUT -p tcp -m tcp --dport 8080 -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 3000 -j ACCEPT


# ddos
iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
iptables -A INPUT -p tcp ! --syn -m state --state NEW -j DROP
iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP

iptables-save | sudo tee /etc/sysconfig/iptables

systemctl restart iptables

iptables -L -n

#  nmap -Pn 185.105.7.112