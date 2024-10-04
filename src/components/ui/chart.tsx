const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme || itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")};
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// Updating the ChartTooltipContent

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      color,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <span className={labelClassName}>{labelFormatter(value)}</span>;
      }

      return <span className={labelClassName}>{value}</span>;
    }, [hideLabel, label, labelFormatter, payload, config, labelClassName, labelKey]);

    return (
      <div ref={ref} className={cn("bg-background p-2 rounded", className)}>
        {active && payload && payload.length ? (
          <div>
            {tooltipLabel}
            {payload.map((item) => {
              const itemConfig = getPayloadConfigFromPayload(config, item, item.dataKey);
              return (
                <div key={item.dataKey} className="flex items-center">
                  {itemConfig?.icon && !hideIndicator ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px]",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                          }
                        )}
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    )
                  )}
                  <span className="text-muted-foreground">
                    {itemConfig?.label || item.name}
                  </span>
                  {item.value && (
                    <span className="font-mono font-medium tabular-nums text-foreground">
                      {item.value.toLocaleString()}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
);

ChartTooltipContent.displayName = "ChartTooltip";
