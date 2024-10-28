# Lock Bing Rewards Region
## Bing rewards 锁区

将 Bing rewards 锁区，避免到处跑，需配合代理配置使用。

## Usage

需手动设定是否为国区

```javascript
var isCn = true;
```

需要在代理中设置这两条前置规则，以 clash 为例
```yaml
prepend:
  - 'DOMAIN,rewards.bing.com,DIRECT'
  - 'DOMAIN,cn.bing.com,DIRECT'
```
